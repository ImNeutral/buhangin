export interface CardModel {
    id: string;
    content: string;
    sentiment: Sentiment;
    source: string;
    link: string;
    numMentions ?: number;
    status: Status;
    checked ?: boolean;
    yearPosted: number;
    monthPosted: number;	
    dayPosted: number;	
    hourPosted: number;	
    minutesPosted: number;	
}

export enum Sentiment {GOOD = 'good', BAD = 'bad', NORMAL = 'normal'}
export enum Status {NEW = 'new', ARCHIVED = 'archived', PENDING = 'pending', DONE = 'done'}