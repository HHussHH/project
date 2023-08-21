import { useTranslation } from 'react-i18next';
import React from 'react';

function MainPage() {
  const { t } = useTranslation('MainPage');
  return (
      <div>
          {t('Главная страница')}
      </div>
  );
}

export default MainPage;
