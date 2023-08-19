import React, {FC, useState} from "react";
import cls from "./Sidebar.module.scss"
import {classNames} from "shared/lib"
import {ThemeSwitcher} from "shared/ui/ThemeSwitcher";
import {LanguageSwitcher} from "features/ui/LanguageSwitcher";

interface Props {
   className?:string
}
export const Sidebar:FC<Props> = (props) => {
    const {className} = props

    const [collapsed,setCollapsed] = useState(false);
    const onToggle = () =>{
        setCollapsed(prev => !prev)
    }
    return (
        <div className={classNames(cls.Sidebar,{[cls.collapsed]:collapsed},[className])}>
            <button onClick={onToggle}>click</button>
            <div className={cls.switchers}>
                <ThemeSwitcher/>
                <LanguageSwitcher/>
            </div>
        </div>
    );
};