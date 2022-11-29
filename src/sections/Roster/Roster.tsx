/** @jsxImportSource @emotion/react */
import React, { useContext, useState } from 'react';
import { css } from '@emotion/react';
import { RosterContext, RosterContextType } from '../../contexts/RosterContext';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Colors from '../../constants/Colors';
import AddNewCharDialog from './AddNewCharDialog';
import UpdateCharDialog from './UpdateCharDialog';
import { Character } from '../../types/Character';
import { DndContext, closestCenter, KeyboardSensor, PointerSensor, useSensor, useSensors, DragEndEvent } from '@dnd-kit/core';
import { arrayMove, SortableContext, sortableKeyboardCoordinates, rectSortingStrategy } from '@dnd-kit/sortable';
import { restrictToParentElement } from '@dnd-kit/modifiers';
import CharacterCard from './CharacterCard';

const Roster: React.FC = () => {
    const { roster, dispatch } = useContext(RosterContext) as RosterContextType;
    const [isAddingNewCharDialogOpen, setIsAddingNewCharDialogOpen] = useState(false);
    const [isUpdateCharDialogOpen, setIsUpdateCharDialogOpen] = useState(false);
    const [updatingChar, setUpdatingChar] = useState<Character>();
    const sensors = useSensors(useSensor(PointerSensor, { activationConstraint: { distance: 10 } }), useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates }));

    function handleDragEnd(event: DragEndEvent) {
        const { active, over } = event;

        if (over && active.id !== over.id) {
            const oldIndex = roster.findIndex((char) => char.id === active.id);
            const newIndex = roster.findIndex((char) => char.id === over.id);
            const newOrder = arrayMove(roster, oldIndex, newIndex);
            dispatch({ type: 'REORDER_ROSTER', payload: newOrder });
        }
    }

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
                <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd} modifiers={[restrictToParentElement]}>
                    <SortableContext items={roster} strategy={rectSortingStrategy}>
                        {roster.map((character) => (
                            <CharacterCard character={character} handleEdit={handleEdit} key={character.id} />
                        ))}
                    </SortableContext>
                </DndContext>
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
    height: 179.94px;
    justify-content: center;
    align-self: stretch;
`;

const addIconStyles = css`
    width: 70px;
    height: 70px;
`;
