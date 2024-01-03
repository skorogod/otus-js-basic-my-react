import { FC } from "react";

export const ParagraphComponent: FC<{text: string}> = (props: {text: string}) => {
    return <p>{props.text}</p>
}