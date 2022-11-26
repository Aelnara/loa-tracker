import { Character } from '../types/Character';
import { Progress } from '../types/Progress';

type AddCharAction = {
    type: 'ADD_CHAR';
    payload: Character;
};

type RemoveCharAction = {
    type: 'REMOVE_CHAR';
    payload: string;
};

type UpdateCharAction = {
    type: 'UPDATE_CHAR';
    payload: Character;
};

type ReorderRosterAction = {
    type: 'REORDER_ROSTER';
    payload: Character[];
};

type UpdateProgressAction = {
    type: 'UPDATE_PROGRESS';
    payload: {
        id: string;
        progress: Partial<Progress>;
    };
};

export type RosterAction = AddCharAction | RemoveCharAction | UpdateCharAction | ReorderRosterAction | UpdateProgressAction;

const rosterReducer = (state: Character[], action: RosterAction): Character[] => {
    const updateCharacter = (id: string, updatedChar: Character) => {
        const updatedRoster: Character[] = state;
        const idx = updatedRoster.findIndex((char) => char.id === id);
        updatedRoster.splice(idx, 1, updatedChar);

        return [...updatedRoster];
    };

    switch (action.type) {
        case 'ADD_CHAR':
            return [...state, action.payload];
        case 'REMOVE_CHAR':
            return state.filter((char) => char.id !== action.payload);
        case 'UPDATE_CHAR':
            return updateCharacter(action.payload.id, action.payload);
        case 'REORDER_ROSTER':
            return action.payload;
        case 'UPDATE_PROGRESS':
            let updatedProgressRoster = state;
            const charToUpdate = state.find((char) => char.id === action.payload.id);
            if (charToUpdate) updatedProgressRoster = updateCharacter(action.payload.id, { ...charToUpdate, progress: { ...charToUpdate.progress, ...action.payload.progress } });

            return updatedProgressRoster;
        default:
            return state;
    }
};

export default rosterReducer;
