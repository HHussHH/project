import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Button, ButtonSize, ButtonTheme } from './Button';

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
export const CLEAR_DARK: Story = {
  decorators: [
    ThemeDecorator(Theme.DARK),
  ],
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

export const BACKGROUND: Story = {
  args: {
    children: 'BACKGROUND',
    theme: ButtonTheme.BACKGROUND,
  },
};

export const BACKGROUND_DARK: Story = {
  decorators: [
    ThemeDecorator(Theme.DARK),
  ],
  args: {
    children: 'BACKGROUND',
    theme: ButtonTheme.BACKGROUND,
  },
};

export const BACKGROUND_INVERTED: Story = {
  args: {
    children: 'BACKGROUND',
    theme: ButtonTheme.BACKGROUND_INVERTED,
  },
};

export const BACKGROUND_INVERTED_DARK: Story = {
  decorators: [
    ThemeDecorator(Theme.DARK),
  ],
  args: {
    children: 'BACKGROUND',
    theme: ButtonTheme.BACKGROUND_INVERTED,
  },
};

export const SQUARE_M: Story = {
  args: {
    children: '>',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.SIZE_M,
  },
};

export const SQUARE_L: Story = {
  args: {
    children: '>',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.SIZE_L,
  },
};

export const SQUARE_XL: Story = {
  args: {
    children: '>',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.SIZE_XL,
  },
};

export const SQUARE_M_DARK: Story = {
  decorators: [
    ThemeDecorator(Theme.DARK),
  ],
  args: {
    children: '>',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.SIZE_M,
  },
};

export const SQUARE_L_DARK: Story = {
  decorators: [
    ThemeDecorator(Theme.DARK),
  ],
  args: {
    children: '>',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.SIZE_L,
  },
};

export const SQUARE_XL_DARK: Story = {
  decorators: [
    ThemeDecorator(Theme.DARK),
  ],
  args: {
    children: '>',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.SIZE_XL,
  },
};
