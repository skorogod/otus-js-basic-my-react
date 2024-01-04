import type { Meta, StoryObj } from "@storybook/react";
import { Paragraph } from "../components/paragraph";

const meta = {
    title: "Example/paragraph",
    component: Paragraph,
    parameters: {
        layout: "centered"
    }
}

export default meta;

type story = StoryObj<typeof meta>;

export const paragraph: story = {
    args: {
        text: "PARAGRAPH"
    }
}