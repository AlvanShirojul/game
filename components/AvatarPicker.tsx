
import React from 'react';
import { avatars } from './avatars';
import type { Avatar } from '../types';

interface AvatarPickerProps {
    isOpen: boolean;
    onClose: () => void;
    onSelectAvatar: (avatarComponent: Avatar['component']) => void;
    disabledAvatars: Avatar['component'][];
}

const AvatarPicker: React.FC<AvatarPickerProps> = ({ isOpen, onClose, onSelectAvatar, disabledAvatars }) => {
    if (!isOpen) {
        return null;
    }

    const handleSelect = (avatarComponent: Avatar['component']) => {
        onSelectAvatar(avatarComponent);
    };

    return (
        <div 
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            onClick={onClose}
            role="dialog"
            aria-modal="true"
            aria-labelledby="avatar-picker-title"
        >
            <div 
                className="bg-[#FAF8F1] rounded-2xl shadow-2xl p-6 max-w-md w-full"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex justify-between items-center mb-4">
                    <h2 id="avatar-picker-title" className="text-2xl font-bold font-display text-[#1E459F]">Choose An Avatar</h2>
                    <button 
                        onClick={onClose} 
                        className="text-gray-500 hover:text-gray-800 transition-colors"
                        aria-label="Close avatar picker"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <div className="grid grid-cols-3 gap-4">
                    {avatars.map((avatar) => {
                        const isDisabled = disabledAvatars.includes(avatar.component);
                        return (
                            <button 
                                key={avatar.name} 
                                onClick={() => handleSelect(avatar.component)}
                                disabled={isDisabled}
                                className="avatar-select-btn aspect-square flex items-center justify-center p-2 rounded-lg border-2 focus:outline-none focus:ring-2 focus:ring-[#FABD32] focus:ring-offset-2 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:border-transparent"
                                aria-label={`Select ${avatar.name} avatar`}
                            >
                                <avatar.component className="w-16 h-16 text-[#1E459F]" />
                            </button>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default AvatarPicker;
