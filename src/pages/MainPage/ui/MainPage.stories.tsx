import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import MainPage from './MainPage';

const meta: Meta<typeof MainPage> = {
  title: 'page/MainPage',
  component: MainPage,
};

export default meta;
type Story = StoryObj<typeof MainPage>;

export const LIGHT: Story = {};
export const DARK: Story = {
  decorators: [
    ThemeDecorator(Theme.DARK),
  ],
};
