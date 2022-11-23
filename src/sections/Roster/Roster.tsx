/** @jsxImportSource @emotion/react */
import React, { useContext, useState } from 'react';
import { css } from '@emotion/react';
import { RosterContext, RosterContextType } from '../../contexts/RosterContext';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Dialog from '@mui/material/Dialog';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Button from '@mui/material/Button';
import Colors from '../../constants/Colors';
import { names, ClassName } from '../../types/Class';

const Roster: React.FC = () => {
    const { roster } = useContext(RosterContext) as RosterContextType;
    const [isAddingNewCharDialogOpen, setIsAddingNewCharDialogOpen] = useState(false);
    const [classValue, setClassValue] = useState<ClassName | null>(null);
    const [classInput, setClassInput] = useState('');
    const [nameInput, setNameInput] = useState('');
    const [ilvlInput, setIlvlInput] = useState(0);
    const maxIlvl = 1640;

    return (
        <div css={containerStyles}>
            <div css={rosterListStyles}>
                <div css={addCharCardStyles} onClick={() => setIsAddingNewCharDialogOpen(true)}>
                    <AddCircleOutlineIcon css={addIconStyles} />
                </div>
                {roster.map((character, idx) => (
                    <div css={cardStyles} key={character.ilvl + idx}>
                        <img src={character.class.icon} alt={character.class.name} />
                        <p>({character.class.name})</p>
                        <p css={classNameStyles}>{character.name}</p>
                        <p css={ilvlStyles}>{character.ilvl}</p>
                    </div>
                ))}
            </div>

            <Dialog PaperProps={{ style: { backgroundColor: 'black', borderRadius: 12, padding: 24, gap: 24 } }} onClose={() => setIsAddingNewCharDialogOpen(false)} open={isAddingNewCharDialogOpen}>
                <p css={addCharLabel}>Add Character</p>
                <TextField value={nameInput} inputProps={{ maxLength: 12 }} onChange={(event) => setNameInput(event.target.value)} label="Name" variant="outlined" />
                <Autocomplete
                    value={classValue}
                    onChange={(event: any, newValue: ClassName | null) => setClassValue(newValue)}
                    inputValue={classInput}
                    onInputChange={(event, newInputValue) => setClassInput(newInputValue)}
                    options={names}
                    sx={{ width: 300 }}
                    renderInput={(params) => <TextField {...params} label="Class" />}
                />
                <TextField value={ilvlInput} onChange={(event) => setIlvlInput(Number(event.target.value) > maxIlvl ? maxIlvl : Number(event.target.value))} type="number" label="Item level" inputProps={{ min: 0, max: maxIlvl }} />

                <div css={dialogButtonsContainerStyles}>
                    <Button color="primary" variant="outlined" onClick={() => setIsAddingNewCharDialogOpen(false)}>
                        Cancel
                    </Button>
                    <Button color="primary" variant="outlined">
                        Add
                    </Button>
                </div>
            </Dialog>
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
    padding-top: 60px;
    padding-bottom: 60px;
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

const addCharLabel = css`
    font-size: 24px;
    font-weight: 600;
    letter-spacing: 1.5px;
    margin: 0;
    margin-bottom: 12px;
`;

const addIconStyles = css`
    width: 70px;
    height: 70px;
`;

const dialogButtonsContainerStyles = css`
    display: flex;
    justify-content: end;
    gap: 16px;
`;
