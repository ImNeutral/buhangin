import { NumberSymbol } from '@angular/common';

export interface MetricsModel {
    id: string;
    year: number;
    month: number;
    mentions: number;
    bad: number;
    good: number;
    normal: number;
}