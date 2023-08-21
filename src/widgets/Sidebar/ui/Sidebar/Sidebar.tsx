import React, { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib';
import { Button } from 'shared/ui/Button';
import { LanguageSwitcher } from 'features/ui/LanguageSwitcher';
import { ThemeSwitcher } from 'features/ui/ThemeSwitcher';
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
          <Button data-testid="sidebar-toggle" type="button" onClick={onToggle}>{t('Открыть')}</Button>
          <div className={cls.switchers}>
              <ThemeSwitcher />
              <LanguageSwitcher />

          </div>

      </div>
  );
};
