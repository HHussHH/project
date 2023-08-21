import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button';

export const LanguageSwitcher: FC = () => {
  const { t, i18n } = useTranslation();
  const toggleLang = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };
  return (
      <Button onClick={toggleLang} theme={ButtonTheme.CLEAR}>
          {t('Выбранный язык')}
      </Button>
  );
};
