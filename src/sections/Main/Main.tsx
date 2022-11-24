import React, { useContext } from 'react';
import { NavContext, NavContextType } from '../../contexts/NavContext';
import Progress from '../Progress/Progress';
import Roster from '../Roster/Roster';

const Main: React.FC = () => {
    const { navState } = useContext(NavContext) as NavContextType;

    return (
        <>
            {navState === 'progress' && <Progress />}
            {navState === 'roster' && <Roster />}
        </>
    );
};

export default Main;
