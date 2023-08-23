import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Modal } from './Modal';

const meta: Meta<typeof Modal> = {
  title: 'shared/Modal',
  component: Modal,

};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Primary: Story = {
  decorators: [
    ThemeDecorator(Theme.LIGHT),
  ],
  args: {
    children: 'qer qer qer qer qer qer qer eqr qer qer qr qer qer qer qer 13r 1fq1 fr1q3 f1q3r1 31e q13r 3rq ',
    isOpen: true,
  },
};

export const PrimaryDARK: Story = {
  decorators: [
    ThemeDecorator(Theme.DARK),
  ],
  args: {
    children: 'qer qer qer qer qer qer qer eqr qer qer qr qer qer qer qer 13r 1fq1 fr1q3 f1q3r1 31e q13r 3rq ',
    isOpen: true,
  },
};
