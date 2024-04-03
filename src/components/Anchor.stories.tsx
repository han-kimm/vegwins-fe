import type { Meta, StoryObj } from "@storybook/react";
import "@/app/globals.css";
import Docs from "@/../public/icon/docs.svg";
import Anchor from "@/components/Anchor";

const meta = {
  title: "Example/Button",
  component: Anchor,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Anchor>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    href: "/",
    className: "text-white text-20 font-medium active:text-black-100 active:bg-orange",
    children: (
      <>
        <Docs />
        <span>첫걸음 안내서</span>
      </>
    ),
  },
};
