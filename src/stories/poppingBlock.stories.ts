import { PoppingBlock } from "../components/poppingBlock";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta = {
  title: "Example/PoppingBlock",
  component: PoppingBlock,
};

export default meta;

type story = StoryObj<typeof meta>;

export const popping: story = {
  args: {
    summary: "Test",
    children: "TEST CONTENT",
  },
};
