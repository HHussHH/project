import { FC } from 'react';
import { classNames } from 'shared/lib';
import { useTranslation } from 'react-i18next';
import cls from './NotFoundPage.module.scss';

interface Props {
    className?: string
}

export const NotFoundPage: FC<Props> = (props) => {
  const { className } = props;
  const { t } = useTranslation();
  return (
      <div className={classNames(cls.NotFoundPage, {}, [className])}>
          {t('Страница не найдена')}
      </div>
  );
};
