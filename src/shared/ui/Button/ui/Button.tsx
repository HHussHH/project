import {ButtonHTMLAttributes, FC} from "react";
import cls from "./Button.module.scss"
import {classNames} from "shared/lib"

export enum ButtonTheme {
    CLEAR="clear"
}
interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
   className?:string,
    theme?:ButtonTheme,

}
export const Button:FC<Props> = (props) => {
    const {className,theme = ButtonTheme.CLEAR,children,...otherProps} = props
    return (
        <button className={classNames(cls.Button,{},[cls[theme]])} {...otherProps}>
            {children}
        </button>
    );
};