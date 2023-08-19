import {FC} from "react";
import cls from "./AppLink.module.scss"
import {Link, LinkProps} from "react-router-dom";
import {classNames} from "shared/lib";
export enum AppLinkTheme {
    PRIMARY="primary",
    SECONDARY="secondary",
}
interface Props extends LinkProps {
   className?:string,
    theme?: AppLinkTheme
}
export const AppLink:FC<Props> = (props) => {
    const {className,children,to,theme = AppLinkTheme.SECONDARY,...otherProps} = props
    return (
        <Link to={to} className={classNames(cls.AppLink,{},[className,cls[theme]])} {...otherProps}>
            {children}
        </Link>
    );
};