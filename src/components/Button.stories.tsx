import Button from "./Button";
import type { Meta, StoryObj } from "@storybook/react";
import "@/app/globals.css";
import Image from "next/image";
import Docs from "@/../public/icon/docs.svg";

const meta = {
  title: "Example/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    className: "focus:bg-white",
    children: (
      <>
        <Image src={Docs} alt="안내서 이미지" className="align-baseline" />
        <span className="text-white text-20 font-medium">첫걸음 안내서</span>
      </>
    ),
  },
};
