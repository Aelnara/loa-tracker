import { ClassName } from './ClassName';
import { Progress } from './Progress';

export type Character = {
    id: string;
    name: string;
    ilvl: number;
    class: ClassName;
    progress: Progress;
};
