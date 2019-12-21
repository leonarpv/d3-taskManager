export interface ITask {
    id: number;
    name: string;
    description: string;
    estimate: number;
    stateId: number;
}

export interface IState {
    id: number;
    name: string;
    summary?: number;
}