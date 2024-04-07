import type { Meta, StoryObj } from '@storybook/react';
import BaseLink from '@/components/common/BaseLink';
import Docs from 'public/icon/docs.svg';

const meta = {
  title: 'Example/Button',
  component: BaseLink,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof BaseLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    href: 'https://naver.com',
    target: '_blank',
    className: 'text-white text-20 font-medium active:text-black-100 active:bg-orange',
    children: (
      <>
        <Docs />
        <span>첫걸음 안내서</span>
      </>
    ),
  },
};
