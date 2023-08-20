import React, { FC, useState } from 'react';
import { classNames } from 'shared/lib';
import { ThemeSwitcher } from 'features/ui/ThemeSwitcher';
import { LanguageSwitcher } from 'features/ui/LanguageSwitcher';
import { Button } from 'shared/ui/Button';
import { useTranslation } from 'react-i18next';
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
      <div className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}>
          <Button type="button" onClick={onToggle}>{t('Открыть')}</Button>
          <div className={cls.switchers}>
              <ThemeSwitcher />
              <LanguageSwitcher />
          </div>
      </div>
  );
};
