import { Title } from "../components/title";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Example/Title",
  component: Title,
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const h1: Story = {
  args: {
    level: 1,
    text: "Test Title",
  },
};

export const h2: Story = {
  args: {
    level: 2,
    text: "Test Title",
  },
};

export const h3: Story = {
  args: {
    level: 3,
    text: "Test Title",
  },
};

export const h4: Story = {
  args: {
    level: 4,
    text: "Test Title",
  },
};

export const h5: Story = {
  args: {
    level: 5,
    text: "Test Title",
  },
};

export const h6: Story = {
  args: {
    level: 6,
    text: "Test Title",
  },
};
