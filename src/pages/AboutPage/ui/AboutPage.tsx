// @flow
import * as React from 'react';
import { useTranslation } from 'react-i18next';

type Props = {

};
function AboutPage(props: Props) {
  const { t } = useTranslation('AboutPage');
  return (
      <div>
          {t('О сайте')}
      </div>
  );
}

export default AboutPage;
