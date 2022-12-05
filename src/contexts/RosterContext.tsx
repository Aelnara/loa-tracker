import React, { createContext, useReducer } from 'react';
import { Character } from '../types/Character';
import rosterReducer, { RosterAction } from '../reducers/rosterReducer';
import defaultRoster from '../utils/defaultRoster';

export const RosterContext = createContext<RosterContextType | null>(null);

export type RosterContextType = {
    roster: Character[];
    dispatch: React.Dispatch<RosterAction>;
};

interface Props {
    children: React.ReactNode;
}

export const RosterProvider: React.FC<Props> = ({ children }) => {
    const rosterFromStorage = localStorage.getItem('loa-tracker-progress');
    const initialRoster = rosterFromStorage ? JSON.parse(rosterFromStorage) : defaultRoster;
    const [roster, dispatch] = useReducer(rosterReducer, initialRoster);

    return <RosterContext.Provider value={{ roster, dispatch }}>{children}</RosterContext.Provider>;
};
