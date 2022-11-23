/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
import Nav from './sections/Nav/Nav';
import { NavProvider } from './contexts/NavContext';
import Main from './sections/Main/Main';

const App: React.FC = () => {
    return (
        <NavProvider>
            <div css={containerStyles}>
                <Nav />
                <Main />
            </div>
        </NavProvider>
    );
};

export default App;

const containerStyles = css`
    font-family: 'Roboto';
`;
