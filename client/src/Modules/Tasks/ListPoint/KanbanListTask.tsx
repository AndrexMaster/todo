import {TaskInterface} from "@Types/Tasks";

interface KanbanListTaskProps {
    task: TaskInterface
}

export const KanbanListTask = (props: KanbanListTaskProps) => {
    const {
        task
    } = props

    return (
        <div className={'flex justify-between align-middle px-3 py-2 bg-gray-500'}>
            <div className={'flex flex-col'}>
                <div>{task.title}</div>
                <div>{task.description}</div>
            </div>
            <div>
                BUTTON
            </div>
        </div>
    )
}