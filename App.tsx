
import React, { useState, useEffect, useCallback } from 'react';
import Board from './components/Board';
import Dice from './components/Dice';
import AvatarPicker from './components/AvatarPicker';
import { avatars } from './components/avatars';
import { SNAKES_AND_LADDERS, PLAYER_COLORS } from './constants';
import type { GameStatus, Player, Avatar as AvatarType } from './types';


export default function App() {
    const [players, setPlayers] = useState<Player[]>([]);
    const [numberOfPlayers, setNumberOfPlayers] = useState(2);
    const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0);
    const [winner, setWinner] = useState<Player | null>(null);

    const [diceValue, setDiceValue] = useState(1);
    const [isRolling, setIsRolling] = useState(false);
    const [isMoving, setIsMoving] = useState(false);
    const [gameStatus, setGameStatus] = useState<GameStatus>('NOT_STARTED');
    const [gameMessage, setGameMessage] = useState('Setup your game to start.');

    const [isAvatarPickerOpen, setIsAvatarPickerOpen] = useState(false);
    const [editingPlayerIndex, setEditingPlayerIndex] = useState<number | null>(null);
    const [setupPlayers, setSetupPlayers] = useState<Partial<Player>[]>([]);

    useEffect(() => {
        setSetupPlayers(prev => {
            const newSetup = Array.from({ length: numberOfPlayers }, (_, i) => ({
                id: i,
                name: prev[i]?.name || `Player ${i + 1}`,
                color: PLAYER_COLORS[i],
                avatar: prev[i]?.avatar,
            }));
            return newSetup;
        });
    }, [numberOfPlayers]);

    const handleStartGame = () => {
        const finalPlayers = setupPlayers.map(p => ({
            ...p,
            position: 1,
        })) as Player[];

        setPlayers(finalPlayers);
        setGameStatus('IN_PROGRESS');
        setCurrentPlayerIndex(0);
        setWinner(null);
        setGameMessage(`${finalPlayers[0].name}'s turn to roll!`);
    };

    const resetGame = () => {
        setGameStatus('NOT_STARTED');
        setPlayers([]);
        setNumberOfPlayers(2);
        setDiceValue(1);
        setWinner(null);
        setGameMessage('Setup your game to start.');
    };
    
    const checkWinAndSwitchTurn = useCallback((position: number, playerIndex: number) => {
        if (position === 100) {
            setGameStatus('GAME_OVER');
            setWinner(players[playerIndex]);
            setGameMessage(`Congratulations, ${players[playerIndex].name} Wins!`);
        } else {
            const nextPlayerIndex = (playerIndex + 1) % players.length;
            setCurrentPlayerIndex(nextPlayerIndex);
            setGameMessage(`${players[nextPlayerIndex].name}'s turn to roll.`);
        }
        setIsMoving(false);
    }, [players]);

    const processTurn = useCallback((playerIndex: number, roll: number) => {
        setPlayers(currentPlayers => 
            currentPlayers.map((p, i) => 
                i === playerIndex ? { ...p, stepsToMove: roll, moveDirection: 1 } : p
            )
        );
    }, []);
    
    const handleRollDice = () => {
        if (isRolling || isMoving || gameStatus !== 'IN_PROGRESS') return;
        
        const currentPlayer = players[currentPlayerIndex];
        setIsRolling(true);
        setIsMoving(true);
        setGameMessage(`${currentPlayer.name} is rolling...`);

        const roll = Math.floor(Math.random() * 6) + 1;
        
        setTimeout(() => {
            setDiceValue(roll);
            setGameMessage(`${currentPlayer.name} rolled a ${roll}!`);
            setIsRolling(false);
            processTurn(currentPlayerIndex, roll);
        }, 1000);
    };
    
    useEffect(() => {
        const currentPlayer = players[currentPlayerIndex];
        if (!currentPlayer || !currentPlayer.stepsToMove || currentPlayer.stepsToMove <= 0) {
            return;
        }

        const moveTimeout = setTimeout(() => {
            setPlayers(currentPlayers => 
                currentPlayers.map((p, i) => {
                    if (i === currentPlayerIndex) {
                        const currentDirection = p.moveDirection || 1;
                        let newPosition = p.position + currentDirection;
                        let newDirection = currentDirection;

                        if (newPosition > 100) {
                            newPosition = 99; 
                            newDirection = -1;
                        }

                        return {
                            ...p,
                            position: newPosition,
                            stepsToMove: (p.stepsToMove || 0) - 1,
                            moveDirection: newDirection,
                        };
                    }
                    return p;
                })
            );
        }, 300);

        return () => clearTimeout(moveTimeout);
    }, [players, currentPlayerIndex]);
    
    useEffect(() => {
        const currentPlayer = players[currentPlayerIndex];
        if (isMoving && !isRolling && currentPlayer && currentPlayer.stepsToMove === 0) {
            if (currentPlayer.position === 100) {
                checkWinAndSwitchTurn(currentPlayer.position, currentPlayerIndex);
                return;
            }

            const finalPos = SNAKES_AND_LADDERS[currentPlayer.position];
            
            if (finalPos) {
                const isLadder = finalPos > currentPlayer.position;
                setGameMessage(`${currentPlayer.name} found a ${isLadder ? 'ladder' : 'snake'}!`);
                
                setTimeout(() => {
                    setPlayers(currentPlayers => 
                        currentPlayers.map((p, i) => 
                            i === currentPlayerIndex ? { ...p, position: finalPos } : p
                        )
                    );
                    setTimeout(() => checkWinAndSwitchTurn(finalPos, currentPlayerIndex), 500);
                }, 800);
            } else {
                 checkWinAndSwitchTurn(currentPlayer.position, currentPlayerIndex);
            }
        }
    }, [players, currentPlayerIndex, isMoving, isRolling, checkWinAndSwitchTurn]);


    const handleSelectAvatar = (avatarComponent: AvatarType['component']) => {
        if (editingPlayerIndex === null) return;
        setSetupPlayers(prev => prev.map((p, i) => 
            i === editingPlayerIndex ? { ...p, avatar: avatarComponent } : p
        ));
        setEditingPlayerIndex(null);
        setIsAvatarPickerOpen(false);
    };

    const handleNameChange = (index: number, newName: string) => {
        setSetupPlayers(prev => prev.map((p, i) => 
            i === index ? { ...p, name: newName } : p
        ));
    };

    const isGameSetupValid = setupPlayers.length === numberOfPlayers &&
                             setupPlayers.every(p => p.avatar && p.name && p.name.trim() !== '') &&
                             new Set(setupPlayers.map(p => p.avatar)).size === setupPlayers.length;

    if (gameStatus === 'NOT_STARTED') {
        return (
            <div className="min-h-screen text-[#1E459F] flex flex-col items-center justify-center p-4">
                <header className="text-center mb-8">
                    <h1 className="text-4xl md:text-6xl text-[#1E459F] font-display">Ular Tangga</h1>
                    <h2 className="text-xl md:text-2xl text-[#CF2A2A] font-display">Snakes & Ladders</h2>
                </header>
                <div className="bg-[#FAF8F1]/70 backdrop-blur-sm p-8 rounded-lg shadow-lg border border-[#FABD32] w-full max-w-2xl">
                    <h3 className="text-3xl font-bold text-center text-[#1E459F] font-display mb-6">Game Setup</h3>
                    <div className="mb-6">
                        <label className="block text-xl font-bold text-center mb-2" htmlFor="player-count">Number of Players</label>
                        <div className="flex justify-center gap-2">
                            {[2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                                <button
                                    key={num}
                                    onClick={() => setNumberOfPlayers(num)}
                                    className={`w-10 h-10 rounded-md font-bold text-lg transition-colors ${numberOfPlayers === num ? 'bg-[#1E459F] text-white' : 'bg-[#E1DCCA] hover:bg-[#FABD32]'}`}
                                >
                                    {num}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
                        {setupPlayers.map((player, index) => {
                            const Avatar = player.avatar;
                            return (
                                <div key={index} className="flex flex-col items-center gap-2">
                                    <input
                                        type="text"
                                        value={player.name || ''}
                                        onChange={(e) => handleNameChange(index, e.target.value)}
                                        className="w-full text-center bg-transparent border-b-2 font-bold focus:outline-none focus:border-opacity-100 p-1"
                                        style={{
                                            color: player.color,
                                            borderColor: `${player.color}80`
                                        }}
                                        maxLength={12}
                                    />
                                    <button
                                        onClick={() => {
                                            setEditingPlayerIndex(index);
                                            setIsAvatarPickerOpen(true);
                                        }}
                                        className="w-20 h-20 rounded-full flex items-center justify-center border-4"
                                        style={{ borderColor: player.color, backgroundColor: '#E1DCCA' }}
                                    >
                                        {Avatar ? <Avatar className="w-12 h-12" style={{ color: player.color }} /> : '+'}
                                    </button>
                                </div>
                            );
                        })}
                    </div>
                    <button
                        onClick={handleStartGame}
                        disabled={!isGameSetupValid}
                        className="btn-primary w-full py-3 px-6 font-bold text-xl rounded-lg shadow-md transition-all duration-300 transform hover:scale-105 disabled:bg-gray-400 disabled:cursor-not-allowed disabled:transform-none"
                    >
                        Start Game
                    </button>
                    {!isGameSetupValid && <p className="text-center text-sm text-red-600 mt-2">Please enter a name and select a unique avatar for each player.</p>}
                </div>
                <AvatarPicker 
                    isOpen={isAvatarPickerOpen}
                    onClose={() => setIsAvatarPickerOpen(false)}
                    onSelectAvatar={handleSelectAvatar}
                    disabledAvatars={setupPlayers.map(p => p.avatar).filter(Boolean) as AvatarType['component'][]}
                />
            </div>
        );
    }

    return (
        <div className="min-h-screen text-[#1E459F] flex flex-col items-center justify-center p-4">
            <header className="text-center mb-4">
                <h1 className="text-4xl md:text-6xl text-[#1E459F] font-display">Ular Tangga</h1>
                <h2 className="text-xl md:text-2xl text-[#CF2A2A] font-display">Snakes & Ladders</h2>
            </header>

            <div className="w-full max-w-6xl flex flex-col lg:flex-row gap-8">
                <main className="w-full lg:w-2/3">
                    <div className="aspect-square w-full max-w-2xl mx-auto shadow-2xl rounded-lg overflow-hidden border-4 border-[#1E459F] bg-[#FAF8F1]">
                       <Board players={players} />
                    </div>
                </main>

                <aside className="w-full lg:w-1/3 flex flex-col items-center gap-6 bg-[#FAF8F1]/70 backdrop-blur-sm p-6 rounded-lg shadow-lg border border-[#FABD32]">
                    <div className="w-full text-center">
                        <h3 className="text-2xl font-bold text-[#1E459F] font-display">Game Status</h3>
                        <p className="text-lg text-[#1E459F]/90 mt-2 h-12 flex items-center justify-center">{gameMessage}</p>
                    </div>

                    <div className="w-full space-y-2 max-h-60 overflow-y-auto pr-2">
                        {players.map((player, index) => {
                            const Avatar = player.avatar;
                            const isCurrent = index === currentPlayerIndex;
                            return (
                                <div key={player.id} className={`flex items-center gap-4 p-2 rounded-lg border-2 transition-all ${isCurrent && gameStatus === 'IN_PROGRESS' ? 'shadow-lg scale-105' : ''}`} style={{ borderColor: player.color, backgroundColor: isCurrent ? '#E1DCCA' : 'transparent' }}>
                                    <Avatar className="h-8 w-8" style={{ color: player.color }} />
                                    <span className="font-bold flex-1" style={{ color: player.color }}>{player.name}</span>
                                    <span className="text-2xl font-bold font-mono bg-white px-3 py-1 rounded">{player.position}</span>
                                </div>
                            );
                        })}
                    </div>

                    <div className="w-full flex flex-col items-center gap-4">
                        <Dice value={diceValue} isRolling={isRolling} />
                        {gameStatus === 'GAME_OVER' ? (
                             <button
                                onClick={resetGame}
                                className="btn-primary w-full py-3 px-6 font-bold text-xl rounded-lg shadow-md transition-all duration-300 transform hover:scale-105"
                            >
                                Play Again
                            </button>
                        ) : (
                            <button
                                onClick={handleRollDice}
                                disabled={isRolling || isMoving}
                                className="btn-primary w-full py-3 px-6 font-bold text-xl rounded-lg shadow-md transition-all duration-300 transform hover:scale-105 disabled:bg-gray-400 disabled:cursor-not-allowed disabled:transform-none"
                            >
                                Roll Dice
                            </button>
                        )}
                        {gameStatus === 'IN_PROGRESS' && (
                            <button
                                onClick={resetGame}
                                className="btn-secondary w-full py-2 px-6 font-bold text-lg rounded-lg transition-all duration-300 transform hover:scale-105"
                            >
                                Restart Game
                            </button>
                        )}
                    </div>
                </aside>
            </div>
             <footer className="text-center mt-8 text-[#1E459F]/60">
                <p>Built by a world-class senior frontend React engineer.</p>
            </footer>
        </div>
    );
}