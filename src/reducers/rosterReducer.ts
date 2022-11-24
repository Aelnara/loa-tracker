import { Character } from '../types/Character';

type AddCharAction = {
    type: 'ADD_CHAR';
    payload: Character;
};

type RemoveCharAction = {
    type: 'REMOVE_CHAR';
    payload: string;
};

export type RosterAction = AddCharAction | RemoveCharAction;

const rosterReducer = (state: Character[], action: RosterAction): Character[] => {
    switch (action.type) {
        case 'ADD_CHAR':
            return [...state, action.payload];
        case 'REMOVE_CHAR':
            return state.filter((char) => char.id !== action.payload);
        default:
            return state;
    }
};

export default rosterReducer;
