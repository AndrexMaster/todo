import {TaskInterface} from "@Types/Tasks";

export interface CardInterface {
    id: number;
    title: string;
    description: string;
    categoryId: number;
    tasks: TaskInterface[];
}

export interface CurrentCardInterface extends CardInterface{
}