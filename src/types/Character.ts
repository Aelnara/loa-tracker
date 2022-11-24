import { Class } from './Class';
import { Progress } from './Progress';

export type Character = {
    id: string;
    name: string;
    ilvl: number;
    class: Class;
    progress: Progress;
};
