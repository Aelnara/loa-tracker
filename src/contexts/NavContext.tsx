import React, { createContext, useState } from 'react';

export const NavContext = createContext<NavContextType | null>(null);

export type NavContextType = {
    navState: 'progress' | 'roster';
    changeNavState: (newNavState: 'progress' | 'roster') => void;
};

interface Props {
    children: React.ReactNode;
}

export const NavProvider: React.FC<Props> = ({ children }) => {
    const [navState, setNavState] = useState<'progress' | 'roster'>('progress');

    const changeNavState = (newNavState: 'progress' | 'roster') => setNavState(newNavState);

    return <NavContext.Provider value={{ navState, changeNavState }}>{children}</NavContext.Provider>;
};
