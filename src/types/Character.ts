import { Class } from './Class';
import { Progress } from './Progress';

export type Character = {
    name: string;
    ilvl: number;
    class: Class;
    progress: Progress;
};
