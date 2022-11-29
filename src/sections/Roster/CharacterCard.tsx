/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
import Colors from '../../constants/Colors';
import getClassIcon from '../../utils/getClassIcon';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { Character } from '../../types/Character';

interface CharacterCardProps {
    character: Character;
    handleEdit: (character: Character) => void;
}

const CharacterCard: React.FC<CharacterCardProps> = ({ character, handleEdit }) => {
    const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: character.id });
    const style = { transform: CSS.Transform.toString(transform), transition };

    return (
        <div css={cardStyles} style={style} ref={setNodeRef} {...attributes} {...listeners} onClick={() => handleEdit(character)}>
            <img css={classIconStyles} src={getClassIcon(character.class)} alt={character.class} />
            <p css={classNameStyles}>({character.class})</p>
            <p css={nameStyles}>{character.name}</p>
            <p css={ilvlStyles}>{character.ilvl}</p>
        </div>
    );
};

export default CharacterCard;

const cardStyles = css`
    width: 240px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${Colors.GRAY_LIGHT};
    color: white;
    padding: 12px;
    box-sizing: border-box;
    border-radius: 12px;
    filter: drop-shadow(0px 0px 5px rgba(0, 0, 0, 0.5));
    cursor: pointer;

    &:hover {
        transform: scale(1.01);
    }
`;

const classIconStyles = css`
    width: 70px;
    height: 63.94px;
`;

const classNameStyles = css`
    font-size: 12px;
    font-weight: 500;
    letter-spacing: 1px;
    margin: 8px;
`;

const nameStyles = css`
    font-size: 24px;
    font-weight: 600;
    letter-spacing: 1.5px;
    margin: 0;
`;

const ilvlStyles = css`
    font-size: 14px;
    font-weight: 500;
    letter-spacing: 1px;
    margin: 8px;
`;
