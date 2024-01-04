import { FC } from "react";
import React from "react";
import { paragraphProps } from "./types"

export const Paragraph: FC<paragraphProps> = ({text, fontFamily, fontSize, fontWeight, color, ...props}) => {
    return <p style={{fontFamily, fontSize, fontWeight, color}}>{text}</p>
}

Paragraph.defaultProps = {
    text: "Test text",
    fontFamily: "Arial",
    fontSize: "1rem",
    fontWeight: "normal",
    color: "black"
}