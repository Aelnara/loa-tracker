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

type ResetProgressAction = {
    type: 'RESET_PROGRESS';
    payload: 'daily' | 'weekly' | 'full';
};

export type RosterAction = AddCharAction | RemoveCharAction | UpdateCharAction | ReorderRosterAction | UpdateProgressAction | ResetProgressAction;

const rosterReducer = (state: Character[], action: RosterAction): Character[] => {
    const updateCharacter = (id: string, updatedChar: Character) => {
        const updatedRoster: Character[] = state;
        const idx = updatedRoster.findIndex((char) => char.id === id);
        updatedRoster.splice(idx, 1, updatedChar);

        return [...updatedRoster];
    };

    const saveToStorage = (roster: Character[]) => {
        localStorage.setItem('loa-tracker-progress', JSON.stringify(roster));
    };

    const resetProgress = (progress: Progress, resetType: 'daily' | 'weekly' | 'full'): Progress => {
        if (resetType === 'daily') return { ...progress, daily_una: false, chaos_dungeon: false, guardian_raid: false, guild_contribution: false };
        if (resetType === 'weekly') return { ...progress, weekly_una: false, argos: false, valtan: false, vykas: false, kakul: false };
        if (resetType === 'full') return { ...progress, daily_una: false, chaos_dungeon: false, guardian_raid: false, guild_contribution: false, weekly_una: false, argos: false, valtan: false, vykas: false, kakul: false };
        return progress;
    };

    switch (action.type) {
        case 'ADD_CHAR':
            const rosterWithAddedChar = [...state, action.payload];
            saveToStorage(rosterWithAddedChar);
            return rosterWithAddedChar;
        case 'REMOVE_CHAR':
            const rosterWithRemovedChar = state.filter((char) => char.id !== action.payload);
            saveToStorage(rosterWithRemovedChar);
            return rosterWithRemovedChar;
        case 'UPDATE_CHAR':
            const rosterWithUpdatedChar = updateCharacter(action.payload.id, action.payload);
            saveToStorage(rosterWithUpdatedChar);
            return rosterWithUpdatedChar;
        case 'REORDER_ROSTER':
            saveToStorage(action.payload);
            return action.payload;
        case 'UPDATE_PROGRESS':
            let rosterWithUpdatedProgress = state;
            const charToUpdate = state.find((char) => char.id === action.payload.id);
            if (charToUpdate) rosterWithUpdatedProgress = updateCharacter(action.payload.id, { ...charToUpdate, progress: { ...charToUpdate.progress, ...action.payload.progress } });
            saveToStorage(rosterWithUpdatedProgress);
            return rosterWithUpdatedProgress;
        case 'RESET_PROGRESS':
            const rosterWithResetProgress = state.map((char) => ({ ...char, progress: resetProgress(char.progress, action.payload) }));
            saveToStorage(rosterWithResetProgress);
            return rosterWithResetProgress;
        default:
            saveToStorage(state);
            return state;
    }
};

export default rosterReducer;
