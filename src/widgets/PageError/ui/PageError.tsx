import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib';
import cls from './PageError.module.scss';

interface Props {
    className?: string
}

export const PageError: FC<Props> = (props) => {
  const { className } = props;
  const { t } = useTranslation();

  const handleReload = () => {
    // eslint-disable-next-line no-restricted-globals
    location.reload();
  };
  return (
      <div className={classNames(cls.PageError, {}, [className])}>
          <p>
              {t('Произошла неожиданная ошибка!')}
          </p>
          <button type="button" onClick={handleReload}>
              {t('Обновить страницу')}
          </button>

      </div>
  );
};
