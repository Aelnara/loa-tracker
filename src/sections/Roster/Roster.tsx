/** @jsxImportSource @emotion/react */
import React, { useContext, useState } from 'react';
import { css } from '@emotion/react';
import { RosterContext, RosterContextType } from '../../contexts/RosterContext';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Colors from '../../constants/Colors';
import getClassIcon from '../../utils/getClassIcon';
import AddNewCharDialog from './AddNewCharDialog';
import UpdateCharDialog from './UpdateCharDialog';
import { Character } from '../../types/Character';

const Roster: React.FC = () => {
    const { roster } = useContext(RosterContext) as RosterContextType;
    const [isAddingNewCharDialogOpen, setIsAddingNewCharDialogOpen] = useState(false);
    const [isUpdateCharDialogOpen, setIsUpdateCharDialogOpen] = useState(false);
    const [updatingChar, setUpdatingChar] = useState<Character>();

    const handleEdit = (character: Character) => {
        setUpdatingChar(character);
        setIsUpdateCharDialogOpen(true);
    };

    return (
        <div css={containerStyles}>
            <div css={rosterListStyles}>
                <div css={addCharCardStyles} onClick={() => setIsAddingNewCharDialogOpen(true)}>
                    <AddCircleOutlineIcon css={addIconStyles} />
                </div>
                {roster.map((character) => (
                    <div css={cardStyles} key={character.id} onClick={() => handleEdit(character)}>
                        <img src={getClassIcon(character.class)} alt={character.class} />
                        <p>({character.class})</p>
                        <p css={classNameStyles}>{character.name}</p>
                        <p css={ilvlStyles}>{character.ilvl}</p>
                    </div>
                ))}
            </div>

            <AddNewCharDialog isOpen={isAddingNewCharDialogOpen} setIsOpen={setIsAddingNewCharDialogOpen} />
            {updatingChar && <UpdateCharDialog character={updatingChar} isOpen={isUpdateCharDialogOpen} setIsOpen={setIsUpdateCharDialogOpen} />}
        </div>
    );
};

export default Roster;

const containerStyles = css`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: start;
    gap: 16px;
    margin-top: 60px;
    margin-bottom: 60px;
`;

const rosterListStyles = css`
    max-width: 1008px;
    display: flex;
    justify-content: start;
    align-items: start;
    flex-wrap: wrap;
    gap: 16px;
`;

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

const addCharCardStyles = css`
    ${cardStyles}
    justify-content: center;
    align-self: stretch;
`;

const classNameStyles = css`
    font-size: 32px;
    font-weight: 600;
    letter-spacing: 1.5px;
    margin: 0;
`;

const ilvlStyles = css`
    font-size: 24px;
    font-weight: 500;
    letter-spacing: 2px;
    margin: 12px;
`;

const addIconStyles = css`
    width: 70px;
    height: 70px;
`;
