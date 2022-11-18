/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';

const App: React.FC = () => {
    return (
        <div css={containerStyles}>
            <h1 css={headerStyles}>LOA Tracker</h1>
        </div>
    );
};

export default App;

const containerStyles = css`
    font-family: 'Roboto';
`;

const headerStyles = css`
    margin: 0;
`;
