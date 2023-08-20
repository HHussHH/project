import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button';
import cls from './LanguageSwitcher.module.scss';

interface Props {
    className?: string
}

export const LanguageSwitcher: FC<Props> = (props) => {
  const { className, children } = props;
  const { t, i18n } = useTranslation();
  const toggleLang = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };
  return (
      <Button onClick={toggleLang} className={cls.LanguageSwitcher}>
          {t('Выбранный язык')}
      </Button>
  );
};
