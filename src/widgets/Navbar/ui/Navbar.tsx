import React, {FC} from "react";
import {classNames} from "shared/lib"
import cls from "./Navbar.module.scss"

import {AppLink} from "shared/ui/AppLink";
import {useTranslation} from "react-i18next";


interface Props {
   className?:string
}
export const Navbar:FC<Props> = (props) => {
    const {t} =useTranslation()
    const {className} = props
    return (
        <div className={classNames(cls.Navbar,{},[className])}>
            <div className={cls.Links}>
                <AppLink className={cls.Link}  to="/">
                    {t("Главная")}
                </AppLink>
                <AppLink className={cls.Link}  to="/about">
                    {t("О сайте")}
                </AppLink>
            </div>
        </div>
    );
};


