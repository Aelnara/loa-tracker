import React, { createContext, useState } from 'react';
import { Character } from '../types/Character';
import class_shadowhunter from '../assets/icons/class_shadowhunter.png';
import class_deathblade from '../assets/icons/class_deathblade.png';
import class_reaper from '../assets/icons/class_reaper.png';
import class_sorceress from '../assets/icons/class_sorceress.png';
import class_gunslinger from '../assets/icons/class_gunslinger.png';
import class_glaivier from '../assets/icons/class_glaivier.png';

export const RosterContext = createContext<RosterContextType | null>(null);

export type RosterContextType = {
    roster: Character[];
};

interface Props {
    children: React.ReactNode;
}

const defaultRoster: Character[] = [
    {
        name: 'Aelnara',
        ilvl: 1500,
        class: {
            name: 'Shadowhunter',
            icon: class_shadowhunter,
        },
        progress: {
            argos: false,
            valtan: false,
            vykas: false,
            kakul: false,
        },
    },
    {
        name: 'Alariah',
        ilvl: 1460,
        class: {
            name: 'Deathblade',
            icon: class_deathblade,
        },
        progress: {
            argos: false,
            valtan: false,
            vykas: false,
            kakul: false,
        },
    },
    {
        name: 'Alyressa',
        ilvl: 1460,
        class: {
            name: 'Reaper',
            icon: class_reaper,
        },
        progress: {
            argos: false,
            valtan: false,
            vykas: false,
            kakul: false,
        },
    },
    {
        name: 'Adyriah',
        ilvl: 1460,
        class: {
            name: 'Sorceress',
            icon: class_sorceress,
        },
        progress: {
            argos: false,
            valtan: false,
            vykas: false,
            kakul: false,
        },
    },
    {
        name: 'Alaressa',
        ilvl: 1460,
        class: {
            name: 'Gunslinger',
            icon: class_gunslinger,
        },
        progress: {
            argos: false,
            valtan: false,
            vykas: false,
            kakul: false,
        },
    },
    {
        name: 'Adyressa',
        ilvl: 1460,
        class: {
            name: 'Glaivier',
            icon: class_glaivier,
        },
        progress: {
            argos: false,
            valtan: false,
            vykas: false,
            kakul: false,
        },
    },
];

export const RosterProvider: React.FC<Props> = ({ children }) => {
    const [roster, setRoster] = useState<Character[]>(defaultRoster);

    return <RosterContext.Provider value={{ roster }}>{children}</RosterContext.Provider>;
};
