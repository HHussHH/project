import { ReactNode } from 'react';
import { render } from '@testing-library/react';

import { I18nextProvider } from 'react-i18next';
import i18nFroTest from 'shared/config/i18n/i18nFroTest';
import { MemoryRouter } from 'react-router-dom';

export interface componentOptions {
    route?: string
}

export function RenderComponents(component: ReactNode, options: componentOptions = {}) {
  const {
    route = '/',
  } = options;
  return render(
      <MemoryRouter initialEntries={[route]}>
          <I18nextProvider i18n={i18nFroTest}>
              {component}
          </I18nextProvider>
      </MemoryRouter>,
  );
}
