/** @jsxImportSource @emotion/react */
import React, { useContext } from 'react';
import { css } from '@emotion/react';
import { NavContext, NavContextType } from '../../contexts/NavContext';

const Nav: React.FC = () => {
    const { navState, changeNavState } = useContext(NavContext) as NavContextType;

    return (
        <div css={containerStyles}>
            <div css={linkStyles(navState === 'progress')} onClick={() => changeNavState('progress')}>
                <p css={linkTextStyles}>Progress</p>
            </div>
            <div css={linkStyles(navState === 'roster')} onClick={() => changeNavState('roster')}>
                <p css={linkTextStyles}>Roster</p>
            </div>
        </div>
    );
};

const containerStyles = css`
    background-color: #222222;
    height: 60px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 48px;
    filter: drop-shadow(0px 1px 2px #000);
`;

const linkStyles = (active: boolean) => css`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    color: #faf9f6;
    color: ${active ? '#FFD700' : '#faf9f6'};
    box-sizing: border-box;
    position: relative;
    transition: all 0.1s ease-in-out;

    &:hover {
        color: #ffd700;
    }

    &:after {
        content: '';
        width: ${active ? '100%' : '0%'};
        height: 3px;
        left: 50%;
        bottom: 0;
        position: absolute;
        background-color: #ffd700;
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
