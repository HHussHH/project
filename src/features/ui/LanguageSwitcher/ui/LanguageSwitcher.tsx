import {FC} from "react";
import cls from "./LanguageSwitcher.module.scss"
import {classNames} from "shared/lib"
import {useTranslation} from "react-i18next";
import {Button} from "shared/ui/Button";

interface Props {
   className?:string
}
export const LanguageSwitcher:FC<Props> = (props) => {
   const {className,children} = props
    const {t,  i18n } = useTranslation();
    const toggleLang = () =>{
        i18n.changeLanguage(i18n.language === "ru" ? 'en' : 'ru')
    }
    return (
        <Button onClick={toggleLang} className={cls.LanguageSwitcher}>
            {t("Выбранный язык")}
        </Button>
    );
};