/** @jsxImportSource @emotion/react */
import React, { useContext } from 'react';
import { css } from '@emotion/react';
import { RosterContext, RosterContextType } from '../../contexts/RosterContext';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { Character } from '../../types/Character';
import Colors from '../../constants/Colors';
import getClassIcon from '../../utils/getClassIcon';
import Checkbox from '@mui/material/Checkbox';
import { getGoldForChar, getPossibleRawGoldForChar } from '../../utils/goldProgression';
import gold from '../../assets/icons/gold.png';

interface CharacterProgressProps {
    character: Character;
}

const CharacterProgress: React.FC<CharacterProgressProps> = ({ character }) => {
    const { dispatch } = useContext(RosterContext) as RosterContextType;
    const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: character.id });
    const style = { transform: CSS.Transform.toString(transform), transition };

    const handleProgressChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const updatedProgress = { ...character.progress, [event.target.name]: event.target.checked };
        dispatch({ type: 'UPDATE_PROGRESS', payload: { id: character.id, progress: updatedProgress } });
    };

    return (
        <div css={containerStyles} style={style} ref={setNodeRef} {...attributes} {...listeners}>
            <div css={headerStyles}>
                <img css={classIconStyles} src={getClassIcon(character.class)} alt={character.class} />
                <p css={nameStyles}>{character.name}</p>
                <p css={ilvlStyles}>({character.ilvl})</p>
                <div css={goldProgContainerStyles}>
                    <p css={goldLabelStyles}>
                        {getGoldForChar(character).toLocaleString()} / {getPossibleRawGoldForChar(character).toLocaleString()}
                    </p>
                    <img css={goldLogoStyles} src={gold} alt="gold" />
                </div>
            </div>

            <div css={separatorStyles} />

            <div css={tasksContainerStyles}>
                <div css={rowsContainerStyles}>
                    <Checkbox name="daily_una" checked={character.progress.daily_una} onChange={handleProgressChange} />
                    <Checkbox name="chaos_dungeon" checked={character.progress.chaos_dungeon} onChange={handleProgressChange} />
                    <Checkbox name="guardian_raid" checked={character.progress.guardian_raid} onChange={handleProgressChange} />
                    <Checkbox name="guild_contribution" checked={character.progress.guild_contribution} onChange={handleProgressChange} />
                </div>
                <div css={rowsContainerStyles}>
                    <Checkbox name="weekly_una" checked={character.progress.weekly_una} onChange={handleProgressChange} />
                    <Checkbox name="argos" checked={character.progress.argos} onChange={handleProgressChange} disabled={character.ilvl < 1370} />
                    <Checkbox name="valtan" checked={character.progress.valtan} onChange={handleProgressChange} disabled={character.ilvl < 1415} />
                    <Checkbox name="vykas" checked={character.progress.vykas} onChange={handleProgressChange} disabled={character.ilvl < 1430} />
                    <Checkbox name="kakul" checked={character.progress.kakul} onChange={handleProgressChange} disabled={character.ilvl < 1475} />
                </div>
            </div>
        </div>
    );
};

export default CharacterProgress;

const containerStyles = css`
    width: 180px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${Colors.GRAY_LIGHT};
    padding: 12px;
`;

const headerStyles = css`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    cursor: grab;
`;

const classIconStyles = css`
    width: 50px;
    height: 45.67px;
`;

const nameStyles = css`
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 0.5px;
    width: 100%;
    text-align: center;
    margin: 0;
    margin-top: 4px;
`;

const ilvlStyles = css`
    font-size: 14px;
    letter-spacing: 1px;
    width: 100%;
    text-align: center;
    margin: 0;
    margin-top: 4px;
`;

const goldProgContainerStyles = css`
    display: flex;
    align-items: center;
    margin-top: 10px;
`;

const goldLabelStyles = css`
    font-size: 14px;
    letter-spacing: 1px;
    width: 100%;
    text-align: center;
    margin: 0;
    margin-top: 3px;
    color: ${Colors.GOLD};
`;

const goldLogoStyles = css`
    width: 22px;
    height: 22px;
    margin-left: 8px;
`;

const separatorStyles = css`
    width: 100%;
    height: 2px;
    background-color: ${Colors.GRAY_DARK};
    margin-top: 16px;
    margin-bottom: 10px;
`;

const tasksContainerStyles = css`
    display: flex;
    flex-direction: column;
    gap: 24px;
`;

const rowsContainerStyles = css`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
