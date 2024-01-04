import type { Meta, StoryObj } from "@storybook/react";
import { Image } from "../components/image";
import  Tiger  from "../media/tiger.jpg"

const meta: Meta = {
    title: "Example/Image",
    component: Image,
    parameters: {
        layout: "centered"
    }
}

export default meta;

type story = StoryObj<typeof meta>;

export const Small: story = {
    args: {
        src: Tiger,
        size: "small"
    }
}

export const Medium: story = {
    args: {
        src: Tiger,
        size: "medium"
    }
} 

export const Large: story = {
    args: {
        src: Tiger,
        size: "large"
    }
} 

export const Round: story = {
    args: {
        src: Tiger,
        size: 'medium',
        imageRound: true
    }
}