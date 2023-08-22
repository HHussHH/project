import React, { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { LanguageSwitcher } from 'features/ui/LanguageSwitcher';
import { ThemeSwitcher } from 'features/ui/ThemeSwitcher';
import { ButtonSize } from 'shared/ui/Button/ui/Button';
import InfoIcon from 'shared/assets/icons/info-icon.svg';
import HomeIcon from 'shared/assets/icons/home-icon.svg';
import { AppLink } from 'shared/ui/AppLink';
import cls from './Sidebar.module.scss';

interface Props {
    className?: string
}

export const Sidebar: FC<Props> = (props) => {
  const { className } = props;
  const { t } = useTranslation();
  const [collapsed, setCollapsed] = useState(false);
  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };
  return (
      <div data-testid="sidebar" className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}>
          <Button
            theme={ButtonTheme.BACKGROUND_INVERTED}
            size={ButtonSize.SIZE_L}
            square
            className={cls.btn}
            data-testid="sidebar-toggle"
            type="button"
            onClick={onToggle}
          >
              {collapsed ? '>' : '<'}
          </Button>
          <div className={cls.links}>
              <AppLink className={cls.link} to="/">
                  <span className={cls.icon}>
                      <HomeIcon />
                  </span>
                  {collapsed === false && t('Главная')}
              </AppLink>

              <AppLink className={cls.link} to="/about">
                  <span className={cls.icon}>
                      <InfoIcon />
                  </span>
                  {collapsed === false && t('О сайте')}
              </AppLink>
          </div>
          <div className={classNames(cls.switchers, { [cls.collapsed]: collapsed }, [])}>
              <ThemeSwitcher />
              <LanguageSwitcher short={collapsed} />
          </div>

      </div>
  );
};
