import {Header} from "@Navigation/Header";
interface RootLayoutInterface {
    children: React.ReactNode
}

export const RootLayout = ({children}: RootLayoutInterface) => {
  
    return (
        <div className={'flex flex-col bg-gray-100 h-screen'}>
            <Header/>
            <div className={'h-full box-border'}>
                {children}
            </div>
        </div>
    )
}