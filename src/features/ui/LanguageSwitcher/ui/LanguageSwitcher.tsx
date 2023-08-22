import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button';

interface Props {
    short?: boolean
}

export const LanguageSwitcher: FC<Props> = (props) => {
  const { short } = props;
  const { t, i18n } = useTranslation();
  const toggleLang = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };
  return (
      <Button onClick={toggleLang} theme={ButtonTheme.CLEAR}>
          {short ? t('Короткий язык') : t('Выбранный язык')}
      </Button>
  );
};
