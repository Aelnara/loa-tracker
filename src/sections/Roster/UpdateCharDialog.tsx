/** @jsxImportSource @emotion/react */
import React, { useEffect, useContext, useState } from 'react';
import { css } from '@emotion/react';
import { RosterContext, RosterContextType } from '../../contexts/RosterContext';
import Dialog from '@mui/material/Dialog';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Button from '@mui/material/Button';
import { names, ClassName } from '../../types/ClassName';
import { Character } from '../../types/Character';

interface UpdateCharDialogProps {
    character: Character;
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const UpdateCharDialog: React.FC<UpdateCharDialogProps> = ({ character, isOpen, setIsOpen }) => {
    const { dispatch } = useContext(RosterContext) as RosterContextType;
    const [classValue, setClassValue] = useState<ClassName | null>(null);
    const [classInput, setClassInput] = useState('');
    const [nameInput, setNameInput] = useState('');
    const [ilvlInput, setIlvlInput] = useState(0);
    const maxIlvl = 1640;

    useEffect(() => {
        setClassValue(character.class);
        setNameInput(character.name);
        setIlvlInput(character.ilvl);
    }, [character]);

    const handleUpdateChar = () => {
        if (classValue && nameInput !== '') {
            dispatch({ type: 'UPDATE_CHAR', payload: { ...character, name: nameInput, ilvl: ilvlInput, class: classValue } });
            setIsOpen(false);
        }
    };

    return (
        <Dialog PaperProps={{ style: { backgroundColor: 'black', borderRadius: 12, padding: 24, gap: 24 } }} onClose={() => setIsOpen(false)} open={isOpen}>
            <p css={addCharLabel}>Update Character</p>
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
                <Button color="primary" variant="outlined" onClick={() => dispatch({ type: 'REMOVE_CHAR', payload: character.id })}>
                    Remove
                </Button>
                <Button color="primary" variant="outlined" onClick={handleUpdateChar}>
                    Update
                </Button>
            </div>
        </Dialog>
    );
};

export default UpdateCharDialog;

const addCharLabel = css`
    font-size: 24px;
    font-weight: 600;
    letter-spacing: 1.5px;
    margin: 0;
    margin-bottom: 12px;
`;

const dialogButtonsContainerStyles = css`
    display: flex;
    justify-content: space-between;
    gap: 16px;
`;
