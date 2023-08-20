import { FC } from 'react';
import { classNames } from 'shared/lib';
import { Button } from 'shared/ui/Button';
import { Theme, useTheme } from 'app/providers/ThemeProvider';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';
import LightIcon from 'shared/assets/icons/theme-light.svg';
import cls from './ThemeSwitcher.module.scss';

interface Props {
   className?:string
}
export const ThemeSwitcher:FC<Props> = (props) => {
  const { className } = props;
  const { theme, toggleTheme } = useTheme();

  return (
      <Button className={classNames(cls.ThemeSwitcher, {}, [className])} onClick={toggleTheme}>
          {theme === Theme.DARK ? <LightIcon /> : <DarkIcon />}
      </Button>
  );
};
