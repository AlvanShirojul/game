
import React from 'react';
import type { Avatar } from '../types';

// Avatars based on the provided image

const RoboCatAvatar: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M14 12L10 4H38L34 12" fill="#333" />
        <rect x="10" y="12" width="28" height="18" fill="#4A4A4A"/>
        <path d="M14 12L10 4L6 12H14Z" fill="#333" />
        <path d="M34 12L38 4L42 12H34Z" fill="#333" />
        <rect x="14" y="18" width="20" height="10" fill="#F97316" />
        <rect x="16" y="30" width="6" height="8" fill="#FBBF24" />
        <rect x="26" y="30" width="6" height="8" fill="#FBBF24" />
        <circle cx="17" cy="18" r="5" stroke="#EF4444" strokeWidth="2"/>
        <circle cx="31" cy="18" r="5" stroke="#EF4444" strokeWidth="2"/>
        <path d="M12 24h-3a1 1 0 00-1 1v4a1 1 0 001 1h3" stroke="#4A4A4A" strokeWidth="2" strokeLinecap="round"/>
        <path d="M36 24h3a1 1 0 011 1v4a1 1 0 01-1 1h-3" stroke="#4A4A4A" strokeWidth="2" strokeLinecap="round"/>
    </svg>
);

const BearAvatar: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <circle cx="24" cy="24" r="16" fill="#8C5B42"/>
        <circle cx="16" cy="16" r="5" fill="#A57157"/>
        <circle cx="32" cy="16" r="5" fill="#A57157"/>
        <circle cx="24" cy="26" r="4" fill="#6B4F3A"/>
        <circle cx="21" cy="23" r="1.5" fill="#272727"/>
        <circle cx="27" cy="23" r="1.5" fill="#272727"/>
        <path d="M20 32L24 28L28 32Z" fill="#FBBF24"/>
    </svg>
);

const SamuraiCatAvatar: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M10 20C10 14.4772 14.4772 10 20 10H28C33.5228 10 38 14.4772 38 20V38H10V20Z" fill="#FFF"/>
        <path d="M20 6L14 12H34L28 6H20Z" fill="#FBBF24"/>
        <path d="M14 34H34V38H14V34Z" fill="#84CC16"/>
        <circle cx="19" cy="22" r="1" fill="#333"/>
        <circle cx="29" cy="22" r="1" fill="#333"/>
        <path d="M22 26h4" stroke="#333" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="16" cy="19" r="1.5" fill="#FECACA" />
        <circle cx="32" cy="19" r="1.5" fill="#FECACA" />
    </svg>
);

const TabbyCatAvatar: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M14 14C14 8.47715 18.4772 4 24 4C29.5228 4 34 8.47715 34 14V22H14V14Z" fill="#A3A3A3"/>
        <path d="M18 10L14 4" stroke="#737373" strokeWidth="2"/>
        <path d="M30 10L34 4" stroke="#737373" strokeWidth="2"/>
        <rect x="12" y="22" width="24" height="16" rx="4" fill="#F87171"/>
        <path d="M32 38V44L28 40" stroke="#A3A3A3" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="20" cy="18" r="1.5" fill="#272727"/>
        <circle cx="28" cy="18" r="1.5" fill="#272727"/>
    </svg>
);

const RabbitAvatar: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <rect x="16" y="20" width="16" height="20" fill="#60A5FA"/>
        <circle cx="24" cy="16" r="8" fill="#57534E"/>
        <path d="M18 2L16 12" stroke="#57534E" strokeWidth="3" strokeLinecap="round"/>
        <path d="M30 2L32 12" stroke="#57534E" strokeWidth="3" strokeLinecap="round"/>
        <circle cx="22" cy="16" r="1" fill="#fff"/>
        <circle cx="26" cy="16" r="1" fill="#fff"/>
        <circle cx="24" cy="24" r="2" fill="#FCD34D"/>
    </svg>
);

const SheepAvatar: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <circle cx="24" cy="18" r="10" fill="white"/>
        <path d="M16 14C14.6667 16.6667 14.6 20.2 16 22" stroke="#F3F4F6" strokeWidth="2"/>
        <path d="M32 14C33.3333 16.6667 33.4 20.2 32 22" stroke="#F3F4F6" strokeWidth="2"/>
        <rect x="16" y="28" width="16" height="10" fill="#65A30D"/>
        <rect x="18" y="38" width="12" height="4" fill="#333"/>
        <circle cx="18" cy="18" r="4" stroke="#FBBF24" strokeWidth="2"/>
        <circle cx="30" cy="18" r="4" stroke="#FBBF24" strokeWidth="2"/>
        <line x1="22" y1="18" x2="26" y2="18" stroke="#FBBF24" strokeWidth="2"/>
    </svg>
);

const SlothAvatar: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <rect x="14" y="8" width="20" height="32" rx="10" fill="#8D827A"/>
        <path d="M18 16C18 12.6863 20.6863 10 24 10C27.3137 10 30 12.6863 30 16V24H18V16Z" fill="#F5EFE6"/>
        <circle cx="21" cy="18" r="1" fill="#333"/>
        <circle cx="27" cy="18" r="1" fill="#333"/>
        <path d="M22 22h4" stroke="#333" strokeWidth="2" strokeLinecap="round"/>
        <path d="M14 20H10C8.89543 20 8 20.8954 8 22V28C8 29.1046 8.89543 30 10 30H14" stroke="#84CC16" strokeWidth="4" strokeLinecap="round"/>
    </svg>
);

const CapybaraAvatar: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M12 20C12 13.3726 17.3726 8 24 8C30.6274 8 36 13.3726 36 20V36C36 38.2091 34.2091 40 32 40H16C13.7909 40 12 38.2091 12 36V20Z" fill="#F97316"/>
        <path d="M24 8L28 4H20L24 8Z" fill="#D97706"/>
        <path d="M18 10H30C32.2091 10 34 11.7909 34 14V18H14V14C14 11.7909 15.7909 10 18 10Z" fill="#8C5B42"/>
        <path d="M18 28L24 24L30 28Z" fill="#3B82F6"/>
    </svg>
);

const OtterAvatar: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M16 12C16 7.58172 19.5817 4 24 4C28.4183 4 32 7.58172 32 12V24H16V12Z" fill="#A57157"/>
        <rect x="14" y="24" width="20" height="14" fill="#65A30D"/>
        <path d="M32 38V44L28 42" stroke="#A57157" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="20" cy="16" r="4" stroke="#FBBF24" strokeWidth="2"/>
        <circle cx="28" cy="16" r="4" stroke="#FBBF24" strokeWidth="2"/>
        <line x1="24" y1="16" x2="24" y2="16" stroke="#FBBF24" strokeWidth="2"/>
        <rect x="18" y="30" width="12" height="4" rx="2" fill="#333"/>
    </svg>
);

const CalicoCatAvatar: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M14 14C14 8.47715 18.4772 4 24 4C29.5228 4 34 8.47715 34 14V22H14V14Z" fill="white"/>
        <path d="M28 4L33 12" stroke="#F97316" strokeWidth="4" strokeLinecap="round"/>
        <path d="M16 14L12 20" fill="#57534E"/>
        <rect x="12" y="22" width="24" height="16" rx="4" fill="#FCD34D"/>
        <path d="M20 28L24 24L28 28Z" fill="#EF4444"/>
        <circle cx="20" cy="16" r="4" stroke="#333" strokeWidth="2"/>
        <circle cx="28" cy="16" r="4" stroke="#333" strokeWidth="2"/>
    </svg>
);


export const avatars: Avatar[] = [
    { name: 'Robo Cat', component: RoboCatAvatar },
    { name: 'Bear', component: BearAvatar },
    { name: 'Samurai Cat', component: SamuraiCatAvatar },
    { name: 'Tabby Cat', component: TabbyCatAvatar },
    { name: 'Rabbit', component: RabbitAvatar },
    { name: 'Sheep', component: SheepAvatar },
    { name: 'Sloth', component: SlothAvatar },
    { name: 'Capybara', component: CapybaraAvatar },
    { name: 'Otter', component: OtterAvatar },
    { name: 'Calico Cat', component: CalicoCatAvatar },
];
