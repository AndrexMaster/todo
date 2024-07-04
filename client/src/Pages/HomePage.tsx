import { RootLayout } from "@Layouts/RootLayout";
import { useAppSelector } from "@Store/hooks";
import { RootState } from "@Store/store";
import { KanbanPage } from "@Modules/View/Kanban";

const HomePage = () => {

    const todoViewVariant = useAppSelector((state: RootState) => (state.app.todoViewVariant))

    const ViewVariant = () => {
        switch (todoViewVariant) {
            case 'KANBAN':
                return <KanbanPage/>
            default:
                return (
                    <>
                        HomePage
                    </>
                )
        }
    }

    return (
        <RootLayout>
            <ViewVariant/>
        </RootLayout>
    )
}

HomePage.layout = (page: any) => <RootLayout children={page} />

export default HomePage