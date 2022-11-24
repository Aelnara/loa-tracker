/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
import Nav from './sections/Nav/Nav';
import { NavProvider } from './contexts/NavContext';
import Main from './sections/Main/Main';
import { RosterProvider } from './contexts/RosterContext';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Colors from './constants/Colors';

const theme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: Colors.WHITE,
        },
    },
});

const App: React.FC = () => {
    return (
        <ThemeProvider theme={theme}>
            <NavProvider>
                <RosterProvider>
                    <div css={containerStyles}>
                        <Nav />
                        <Main />
                    </div>
                </RosterProvider>
            </NavProvider>
        </ThemeProvider>
    );
};

export default App;

const containerStyles = css`
    font-family: 'Roboto';
`;
