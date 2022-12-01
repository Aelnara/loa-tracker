/** @jsxImportSource @emotion/react */
import React, { useContext, useState } from 'react';
import { css } from '@emotion/react';
import { RosterContext, RosterContextType } from '../../contexts/RosterContext';
import Dialog from '@mui/material/Dialog';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Button from '@mui/material/Button';
import { names, ClassName } from '../../types/ClassName';
import { v4 } from 'uuid';

interface AddNewCharDialogProps {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddNewCharDialog: React.FC<AddNewCharDialogProps> = ({ isOpen, setIsOpen }) => {
    const { roster, dispatch } = useContext(RosterContext) as RosterContextType;
    const [classValue, setClassValue] = useState<ClassName | null>(null);
    const [classInput, setClassInput] = useState('');
    const [nameInput, setNameInput] = useState('');
    const [ilvlInput, setIlvlInput] = useState(0);
    const maxIlvl = 1640;

    const handleAddNewChar = () => {
        if (roster.length < 16 && classValue && nameInput !== '') {
            dispatch({
                type: 'ADD_CHAR',
                payload: {
                    id: v4(),
                    name: nameInput,
                    ilvl: ilvlInput,
                    class: classValue,
                    progress: { daily_una: false, chaos_dungeon: false, guardian_raid: false, guild_contribution: false, weekly_una: false, argos: false, valtan: false, vykas: false, kakul: false },
                },
            });
            setIsOpen(false);

            setClassValue(null);
            setNameInput('');
            setIlvlInput(0);
        }
    };

    return (
        <Dialog PaperProps={{ style: { backgroundColor: 'black', borderRadius: 12, padding: 24, gap: 24 } }} onClose={() => setIsOpen(false)} open={isOpen}>
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
                <Button color="primary" variant="outlined" onClick={() => setIsOpen(false)}>
                    Cancel
                </Button>
                <Button color="primary" variant="outlined" onClick={handleAddNewChar}>
                    Add
                </Button>
            </div>
        </Dialog>
    );
};

export default AddNewCharDialog;

const addCharLabel = css`
    font-size: 24px;
    font-weight: 600;
    letter-spacing: 1.5px;
    margin: 0;
    margin-bottom: 12px;
`;

const dialogButtonsContainerStyles = css`
    display: flex;
    justify-content: end;
    gap: 16px;
`;
