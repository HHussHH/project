import { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from 'shared/lib';
import cls from './Button.module.scss';

export enum ButtonTheme {
    CLEAR = 'clear',
    OUTLINE = 'outline'
}

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string,
    theme?: ButtonTheme,

}

export const Button: FC<Props> = (props) => {
  const {
    className, theme, children, ...otherProps
  } = props;
  return (
      <button type="button" className={classNames(cls.Button, {}, [cls[theme]])} {...otherProps}>
          {children}
      </button>
  );
};
