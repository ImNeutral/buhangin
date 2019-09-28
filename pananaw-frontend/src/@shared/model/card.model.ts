export interface CardModel {
    uid: string;
    content: string;
    sentiment: Sentiment;
    source: string;
    link: string;
    numShares ?: number;
    numReacts ?: number;
    status: Status;
    yearPosted: string;
    monthPosted: string;	
    dayPosted: string;	
    hourPosted: string;	
    minutesPosted: string;	
}

export enum Sentiment {GOOD = 'Good', BAD = 'Bad', NORMAL = 'Normal'}
export enum Status {NEW = 'New', ARCHIVED = 'Archived', PENDING = 'Pending', DONE = 'Done'}