/** @jsxImportSource @emotion/react */
import React, { useContext } from 'react';
import { css } from '@emotion/react';
import { RosterContext, RosterContextType } from '../../contexts/RosterContext';
import gold from '../../assets/icons/gold.png';
import { getGoldForRoster, getPossibleRawGoldForRoster } from '../../utils/goldProgression';
import Colors from '../../constants/Colors';

const GoldProgression: React.FC = () => {
    const { roster } = useContext(RosterContext) as RosterContextType;

    return (
        <div css={containerStyles}>
            <p css={goldLabelStyles}>
                {getGoldForRoster(roster).toLocaleString()} / {getPossibleRawGoldForRoster(roster).toLocaleString()}
            </p>
            <img css={goldLogoStyles} src={gold} alt="gold" />
        </div>
    );
};

const containerStyles = css`
    width: 230px;
    display: flex;
    align-items: center;
    justify-content: end;
`;

const goldLabelStyles = css`
    font-size: 20px;
    letter-spacing: 1px;
    color: ${Colors.GOLD};
`;

const goldLogoStyles = css`
    width: 40px;
    height: 40px;
    margin-left: 12px;
`;

export default GoldProgression;
