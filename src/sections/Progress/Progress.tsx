/** @jsxImportSource @emotion/react */
import React, { useContext } from 'react';
import { css } from '@emotion/react';
import Colors from '../../constants/Colors';
import { RosterContext, RosterContextType } from '../../contexts/RosterContext';
import { DndContext, closestCenter, KeyboardSensor, PointerSensor, useSensor, useSensors, DragEndEvent } from '@dnd-kit/core';
import { arrayMove, SortableContext, sortableKeyboardCoordinates, horizontalListSortingStrategy } from '@dnd-kit/sortable';
import { restrictToHorizontalAxis } from '@dnd-kit/modifiers';
import CharacterProgress from './CharacterProgress';
import daily_una from '../../assets/icons/progression/daily_una.png';
import daily_chaos from '../../assets/icons/progression/daily_chaos.png';
import daily_guardian from '../../assets/icons/progression/daily_guardian.png';
import daily_sylmael from '../../assets/icons/progression/daily_sylmael.png';
import weekly_una from '../../assets/icons/progression/weekly_una.png';
import weekly_abyssal_raid from '../../assets/icons/progression/weekly_abyssal_raid.png';
import weekly_legion_raid from '../../assets/icons/progression/weekly_legion_raid.png';

const Progress: React.FC = () => {
    const { roster, dispatch } = useContext(RosterContext) as RosterContextType;
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

    return (
        <div css={containerStyles}>
            <div css={tasksContainerStyles}>
                <div css={taskContainerStyles}>
                    <img css={taskIconStyles} src={daily_una} alt="task-icon" />
                    <p css={taskLabelStyles}>Una (Daily)</p>
                </div>
                <div css={taskContainerStyles}>
                    <img css={taskIconStyles} src={daily_chaos} alt="task-icon" />
                    <p css={taskLabelStyles}>Chaos Dungeons</p>
                </div>
                <div css={taskContainerStyles}>
                    <img css={taskIconStyles} src={daily_guardian} alt="task-icon" />
                    <p css={taskLabelStyles}>Guardian Raids</p>
                </div>
                <div css={taskContainerStyles} style={{ marginBottom: 24 }}>
                    <img css={taskIconStyles} src={daily_sylmael} alt="task-icon" />
                    <p css={taskLabelStyles}>Guild Contribution</p>
                </div>

                <div css={taskContainerStyles}>
                    <img css={taskIconStyles} src={weekly_una} alt="task-icon" />
                    <p css={taskLabelStyles}>Una (Weekly)</p>
                </div>
                <div css={taskContainerStyles}>
                    <img css={taskIconStyles} src={weekly_abyssal_raid} alt="task-icon" />
                    <p css={taskLabelStyles}>Argos</p>
                </div>
                <div css={taskContainerStyles}>
                    <img css={taskIconStyles} src={weekly_legion_raid} alt="task-icon" />
                    <p css={taskLabelStyles}>Valtan</p>
                </div>
                <div css={taskContainerStyles}>
                    <img css={taskIconStyles} src={weekly_legion_raid} alt="task-icon" />
                    <p css={taskLabelStyles}>Vykas</p>
                </div>
                <div css={taskContainerStyles}>
                    <img css={taskIconStyles} src={weekly_legion_raid} alt="task-icon" />
                    <p css={taskLabelStyles}>Kakul-Sayton</p>
                </div>
            </div>

            <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd} modifiers={[restrictToHorizontalAxis]}>
                <SortableContext items={roster} strategy={horizontalListSortingStrategy}>
                    {roster.map((character) => (
                        <CharacterProgress key={character.id} character={character} />
                    ))}
                </SortableContext>
            </DndContext>
        </div>
    );
};

export default Progress;

const containerStyles = css`
    display: flex;
    justify-content: center;
    margin-top: 60px;
    margin-bottom: 60px;
    gap: 12px;
`;

const tasksContainerStyles = css`
    display: flex;
    flex-direction: column;
    background-color: ${Colors.GRAY_LIGHT};
    padding: 12px;
    margin-top: 138px;
`;

const taskContainerStyles = css`
    height: 42px;
    display: flex;
    align-items: center;
`;

const taskIconStyles = css`
    width: 24px;
    height: 24px;
`;

const taskLabelStyles = css`
    font-size: 18px;
    letter-spacing: 0.5px;
    padding-left: 12px;
    margin: 0;
`;
