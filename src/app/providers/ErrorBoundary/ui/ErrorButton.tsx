import { FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

// Тестовый компонент, не более
export const ErrorButton: FC = () => {
  const { t } = useTranslation();

  const [error, setError] = useState(false);
  const handleCreateError = () => setError(true);

  useEffect(() => {
    if (error) {
      throw new Error();
    }
  }, [error]);
  return (
      <button type="button" onClick={handleCreateError}>
          {t('Кнопка для тестирования пойманных ошибок')}
      </button>
  );
};
