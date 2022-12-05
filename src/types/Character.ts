import { ClassName } from './ClassName';
import { Progress } from './Progress';

export type Character = {
    id: string;
    name: string;
    ilvl: number;
    class: ClassName;
    gold_earning: boolean;
    progress: Progress;
};
