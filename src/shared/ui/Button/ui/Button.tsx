import { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from 'shared/lib';
import cls from './Button.module.scss';

export enum ButtonTheme {
    CLEAR = 'clear',
    CLEAR_INVERTED = 'clearInverted',
    OUTLINE = 'outline',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'backgroundInverted',
}

export enum ButtonSize {
    SIZE_M = 'size_m',
    SIZE_L = 'size_l',
    SIZE_XL = 'size_xl',
}

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string,
    theme?: ButtonTheme,
    size?: ButtonSize,
    square?: boolean,
}

export const Button: FC<Props> = (props) => {
  const {
    className, theme, square, children, size, ...otherProps
  } = props;

  const additional = [
    cls[theme],
    className,
    cls[size],
  ];
  return (
      <button type="button" className={classNames(cls.Button, { [cls.square]: square }, additional)} {...otherProps}>
          {children}
      </button>
  );
};
