import type { Meta, StoryObj } from '@storybook/react';
import { BadgeDemo } from './badge'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/Badge',
  component: BadgeDemo,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof BadgeDemo>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
    args: {
        variant: "default",
    },
};

export const Destructive: Story = {
    args: {
        variant: "destructive",
    },
};

export const Outline: Story = {
    args: {
        variant: "outline",
    },
};

export const Secondary: Story = {
    args: {
        variant: "secondary",
    },
};
