import {Header} from "@Navigation/Header";
interface RootLayoutInterface {
    children: React.ReactNode
}

export const RootLayout = ({children}: RootLayoutInterface) => {
  
    return (
        <>
            <Header/>
            {children}
        </>
    )
}