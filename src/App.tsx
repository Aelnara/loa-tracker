/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
import Nav from './sections/Nav/Nav';
import { NavProvider } from './contexts/NavContext';

const App: React.FC = () => {
    return (
        <NavProvider>
            <div css={containerStyles}>
                <Nav />
            </div>
        </NavProvider>
    );
};

export default App;

const containerStyles = css`
    font-family: 'Roboto';
`;
