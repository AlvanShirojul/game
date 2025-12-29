
import React from 'react';

interface DiceProps {
    value: number;
    isRolling: boolean;
}

const DiceFace = ({ value }: { value: number }) => {
    const dotPositions: { [key: number]: string[] } = {
        1: ['col-start-2 row-start-2'],
        2: ['col-start-1 row-start-1', 'col-start-3 row-start-3'],
        3: ['col-start-1 row-start-1', 'col-start-2 row-start-2', 'col-start-3 row-start-3'],
        4: ['col-start-1 row-start-1', 'col-start-3 row-start-1', 'col-start-1 row-start-3', 'col-start-3 row-start-3'],
        5: ['col-start-1 row-start-1', 'col-start-3 row-start-1', 'col-start-2 row-start-2', 'col-start-1 row-start-3', 'col-start-3 row-start-3'],
        6: ['col-start-1 row-start-1', 'col-start-3 row-start-1', 'col-start-1 row-start-2', 'col-start-3 row-start-2', 'col-start-1 row-start-3', 'col-start-3 row-start-3'],
    };

    return (
        <div className="grid grid-cols-3 grid-rows-3 w-16 h-16 gap-1 p-1">
            {dotPositions[value] && dotPositions[value].map((pos, index) => (
                <div key={index} className={`w-3 h-3 bg-white rounded-full ${pos}`}></div>
            ))}
        </div>
    );
};

const Dice = ({ value, isRolling }: DiceProps) => {
    const showClass = `show-${value}`;
    const cubeClasses = `dice ${isRolling ? 'is-rolling' : showClass}`;
    const shadowClasses = `dice-shadow ${isRolling ? 'rolling' : ''}`;

    return (
        <div className="dice-wrapper">
            <div className="dice-container">
                <div className={cubeClasses}>
                    <div className="dice-face dice-face-1"><DiceFace value={1} /></div>
                    <div className="dice-face dice-face-2"><DiceFace value={2} /></div>
                    <div className="dice-face dice-face-3"><DiceFace value={3} /></div>
                    <div className="dice-face dice-face-4"><DiceFace value={4} /></div>
                    <div className="dice-face dice-face-5"><DiceFace value={5} /></div>
                    <div className="dice-face dice-face-6"><DiceFace value={6} /></div>
                </div>
            </div>
            <div className={shadowClasses}></div>
        </div>
    );
};

export default Dice;