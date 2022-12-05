import { Character } from '../types/Character';
import { v4 } from 'uuid';

const defaultRoster: Character[] = [
    {
        id: v4(),
        name: 'Character 1',
        ilvl: 1490,
        class: 'Shadowhunter',
        gold_earning: true,
        progress: {
            daily_una: false,
            chaos_dungeon: false,
            guardian_raid: false,
            guild_contribution: false,

            weekly_una: false,
            argos: false,
            valtan: false,
            vykas: false,
            kakul: false,
        },
    },
    {
        id: v4(),
        name: 'Character 2',
        ilvl: 1445,
        class: 'Deathblade',
        gold_earning: true,
        progress: {
            daily_una: false,
            chaos_dungeon: false,
            guardian_raid: false,
            guild_contribution: false,

            weekly_una: false,
            argos: false,
            valtan: false,
            vykas: false,
            kakul: false,
        },
    },
    {
        id: v4(),
        name: 'Character 3',
        ilvl: 1445,
        class: 'Reaper',
        gold_earning: true,
        progress: {
            daily_una: false,
            chaos_dungeon: false,
            guardian_raid: false,
            guild_contribution: false,

            weekly_una: false,
            argos: false,
            valtan: false,
            vykas: false,
            kakul: false,
        },
    },
];

export default defaultRoster;
