import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { AppLink } from './AppLink';

const meta: Meta<typeof AppLink> = {
  title: 'shared/AppLink',
  component: AppLink,
};

export default meta;
type Story = StoryObj<typeof AppLink>;

export const LIGHT: Story = {
  args: {
    children: 'Link',
  },
};
export const DARK: Story = {
  args: {
    children: 'Link',
  },
  decorators: [
    ThemeDecorator(Theme.DARK),
  ],
};
