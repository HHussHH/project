import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Button, ButtonTheme } from './Button';

const meta: Meta<typeof Button> = {
  title: 'shared/Button',
  component: Button,

};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: 'Primary',
  },
};

export const CLEAR: Story = {
  args: {
    children: 'CLEAR',
    theme: ButtonTheme.CLEAR,
  },
};
export const OUTLINE_DARK: Story = {
  decorators: [
    ThemeDecorator(Theme.DARK),
  ],
  args: {
    children: 'OUTLINE_DARK',
    theme: ButtonTheme.OUTLINE,
  },
};

export const OUTLINE: Story = {
  args: {
    children: 'OUTLINE',
    theme: ButtonTheme.OUTLINE,
  },
};
