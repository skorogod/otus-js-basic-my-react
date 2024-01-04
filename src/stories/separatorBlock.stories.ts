import type { Meta, StoryObj } from "@storybook/react";
import { SeparatorBlock } from "../components/separatorBlock";

const meta = {
    title: "Example/SeparatorBlock",
    component: SeparatorBlock,
}

export default meta;

type story = StoryObj<typeof meta>;

export const Small = {
    args: {
        size: "small",
        borderWidth: "small",
    }
}

export const Medium = {
    args: {
        size: "medium",
        borderWidth: "medium",
    }
}

export const Large= {
    args: {
        size: "large",
        borderWidth: "large"
    }
}