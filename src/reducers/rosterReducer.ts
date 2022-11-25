import { Character } from '../types/Character';

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

export type RosterAction = AddCharAction | RemoveCharAction | UpdateCharAction | ReorderRosterAction;

const rosterReducer = (state: Character[], action: RosterAction): Character[] => {
    switch (action.type) {
        case 'ADD_CHAR':
            return [...state, action.payload];
        case 'REMOVE_CHAR':
            return state.filter((char) => char.id !== action.payload);
        case 'UPDATE_CHAR':
            const updatedRoster: Character[] = state;
            const idx = updatedRoster.findIndex((char) => char.id === action.payload.id);
            updatedRoster.splice(idx, 1, action.payload);

            return updatedRoster;
        case 'REORDER_ROSTER':
            return action.payload;
        default:
            return state;
    }
};

export default rosterReducer;
