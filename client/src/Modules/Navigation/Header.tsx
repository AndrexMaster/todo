import React from "react";
import {UserMenu} from "@Navigation/UserMenu";
import {Logo} from "@Navigation/Logo";
export const Header = () => {

    return (
        <header className={'px-5 py-3 bg-gray-300'}>
            <div className={'flex items-center justify-between'}>
                <Logo/>
                <UserMenu/>
            </div>
        </header>
    )
}