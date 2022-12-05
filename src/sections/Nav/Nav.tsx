/** @jsxImportSource @emotion/react */
import React, { useContext } from 'react';
import { css } from '@emotion/react';
import { NavContext, NavContextType } from '../../contexts/NavContext';
import Colors from '../../constants/Colors';
import DayProgression from './DayProgression';
import GoldProgression from './GoldProgression';

const Nav: React.FC = () => {
    const { navState, changeNavState } = useContext(NavContext) as NavContextType;

    return (
        <div css={containerStyles}>
            <DayProgression />

            <div css={linksContainerStyles}>
                <div css={linkStyles(navState === 'progress')} onClick={() => changeNavState('progress')}>
                    <p css={linkTextStyles}>Progress</p>
                </div>
                <div css={linkStyles(navState === 'roster')} onClick={() => changeNavState('roster')}>
                    <p css={linkTextStyles}>Roster</p>
                </div>
            </div>

            <GoldProgression />
        </div>
    );
};

const containerStyles = css`
    background-color: ${Colors.GRAY_LIGHT};
    height: 60px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    padding: 0 32px;
    gap: 48px;
    filter: drop-shadow(0px 1px 2px #000);
`;
const linksContainerStyles = css`
    display: flex;
    height: 60px;
    justify-content: center;
    align-items: center;
    gap: 48px;
`;

const linkStyles = (active: boolean) => css`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    color: ${active ? Colors.GOLD : Colors.WHITE};
    box-sizing: border-box;
    position: relative;
    transition: all 0.1s ease-in-out;

    &:hover {
        color: ${Colors.GOLD};
    }

    &:after {
        content: '';
        width: ${active ? '100%' : '0%'};
        height: 3px;
        left: 50%;
        bottom: 0;
        position: absolute;
        background-color: ${Colors.GOLD};
        border-radius: 12px;
        transform: translateX(-50%);
        transition: width 0.1s ease-in-out;
    }
`;

const linkTextStyles = css`
    font-size: 22px;
    font-weight: 600;
    letter-spacing: 0.7px;
    color: inherit;
    margin: 0;
`;

export default Nav;
