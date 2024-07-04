export type TaskInterface = {
    id: number;
    cardId: number;
    projectId: number;
    title: string;
    description: string;
    dueDate: Date;

}

export interface CurrentTaskInterface extends TaskInterface{
    files: string[];
}