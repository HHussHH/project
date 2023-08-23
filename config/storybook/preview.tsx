import type { Preview } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StyleDecorator } from 'shared/config/storybook/StyleDecorator/StyleDecorator';
import { Theme } from 'app/providers/ThemeProvider';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },

  decorators: [
    StyleDecorator,
    ThemeDecorator(Theme.DARK),
    (story) => <BrowserRouter>{story()}</BrowserRouter>,
  ],
};

export default preview;
