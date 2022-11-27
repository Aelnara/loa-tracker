import React, { createContext, useReducer } from 'react';
import { Character } from '../types/Character';
import rosterReducer, { RosterAction } from '../reducers/rosterReducer';

export const RosterContext = createContext<RosterContextType | null>(null);

export type RosterContextType = {
    roster: Character[];
    dispatch: React.Dispatch<RosterAction>;
};

interface Props {
    children: React.ReactNode;
}

const defaultRoster: Character[] = [
    {
        id: '1',
        name: 'Aelnara',
        ilvl: 1500,
        class: 'Shadowhunter',
        progress: {
            daily_una: false,
            chaos_dungeon: false,
            guardian_raid: false,
            guild_contribution: false,

            weekly_una: false,
            argos: false,
            valtan: false,
            vykas: false,
            kakul: false,
        },
    },
    {
        id: '2',
        name: 'Alariah',
        ilvl: 1460,
        class: 'Deathblade',
        progress: {
            daily_una: false,
            chaos_dungeon: false,
            guardian_raid: false,
            guild_contribution: false,

            weekly_una: false,
            argos: false,
            valtan: false,
            vykas: false,
            kakul: false,
        },
    },
    {
        id: '3',
        name: 'Alyressa',
        ilvl: 1460,
        class: 'Reaper',
        progress: {
            daily_una: false,
            chaos_dungeon: false,
            guardian_raid: false,
            guild_contribution: false,

            weekly_una: false,
            argos: false,
            valtan: false,
            vykas: false,
            kakul: false,
        },
    },
    {
        id: '4',
        name: 'Adyriah',
        ilvl: 1460,
        class: 'Sorceress',
        progress: {
            daily_una: false,
            chaos_dungeon: false,
            guardian_raid: false,
            guild_contribution: false,

            weekly_una: false,
            argos: false,
            valtan: false,
            vykas: false,
            kakul: false,
        },
    },
    {
        id: '5',
        name: 'Alaressa',
        ilvl: 1460,
        class: 'Gunslinger',
        progress: {
            daily_una: false,
            chaos_dungeon: false,
            guardian_raid: false,
            guild_contribution: false,

            weekly_una: false,
            argos: false,
            valtan: false,
            vykas: false,
            kakul: false,
        },
    },
    {
        id: '6',
        name: 'Adyressa',
        ilvl: 1460,
        class: 'Glaivier',
        progress: {
            daily_una: false,
            chaos_dungeon: false,
            guardian_raid: false,
            guild_contribution: false,

            weekly_una: false,
            argos: false,
            valtan: false,
            vykas: false,
            kakul: false,
        },
    },
];

export const RosterProvider: React.FC<Props> = ({ children }) => {
    const rosterFromStorage = localStorage.getItem('loa-tracker-progress');
    const initialRoster = rosterFromStorage ? JSON.parse(rosterFromStorage) : defaultRoster;
    const [roster, dispatch] = useReducer(rosterReducer, initialRoster);

    return <RosterContext.Provider value={{ roster, dispatch }}>{children}</RosterContext.Provider>;
};
