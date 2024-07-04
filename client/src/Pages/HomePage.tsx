import { RootLayout } from "@Layouts/RootLayout";
import { useAppSelector } from "@Store/hooks";
import { RootState } from "@Store/store";
import { KanBanPage } from "@Modules/KanBan";

const HomePage = () => {

    const todoViewVariant = useAppSelector((state: RootState) => (state.app.todoViewVariant))

    switch (todoViewVariant) {
        case 'KANBAN':
            return <KanBanPage/>
        default:
            return (
                <>
                    HomePage
                </>
            )
    }
}

HomePage.layout = (page: any) => <RootLayout children={page} />

export default HomePage