/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { Character } from '../../types/Character';
import Colors from '../../constants/Colors';
import getClassIcon from '../../utils/getClassIcon';
import Checkbox from '@mui/material/Checkbox';

interface CharacterProgressProps {
    character: Character;
}

const CharacterProgress: React.FC<CharacterProgressProps> = ({ character }) => {
    const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: character.id });
    const style = { transform: CSS.Transform.toString(transform), transition };

    return (
        <div css={containerStyles} style={style} ref={setNodeRef} {...attributes} {...listeners}>
            <div css={headerStyles}>
                <img css={classIconStyles} src={getClassIcon(character.class)} alt={character.class} />
                <p css={nameStyles}>{character.name}</p>
                <p css={ilvlStyles}>({character.ilvl})</p>
            </div>

            <div css={separatorStyles} />

            <div css={tasksContainerStyles}>
                <div css={rowsContainerStyles}>
                    <Checkbox checked={character.progress.daily.una} />
                    <Checkbox checked={character.progress.daily.chaos_dungeon} />
                    <Checkbox checked={character.progress.daily.guardian_raid} />
                    <Checkbox checked={character.progress.daily.guild_contribution} />
                </div>
                <div css={rowsContainerStyles}>
                    <Checkbox checked={character.progress.weekly.una} />
                    <Checkbox checked={character.progress.weekly.argos} />
                    <Checkbox checked={character.progress.weekly.valtan} />
                    <Checkbox checked={character.progress.weekly.vykas} />
                    <Checkbox checked={character.progress.weekly.kakul} />
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
    height: 110px;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    cursor: pointer;
`;

const classIconStyles = css`
    // width: 40px;
    // height: 36.54px;
    width: 50px;
    height: 45.67px;
`;

const nameStyles = css`
    font-size: 24px;
    font-weight: 500;
    letter-spacing: 0.5px;
    width: 100%;
    text-align: center;
    margin: 0;
    margin-top: 12px;
`;

const ilvlStyles = css`
    font-size: 14px;
    letter-spacing: 1px;
    width: 100%;
    text-align: center;
    margin: 0;
    margin-top: 4px;
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
`;
