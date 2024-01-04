import { FC } from "react";
import React from "react";
import { separatorCompProps } from "./types";
import "./separatorBlock.css"

export const SeparatorBlock: FC<separatorCompProps> = (props: separatorCompProps) => {
    return <div className={["separator-block", `separator-block--${props.size}`].join(' ')}>
        <div className={["separator-block-border", `border-${props.borderWidth}`].join(' ')} style={{borderColor: props.borderColor}}></div>
    </div>
}

SeparatorBlock.defaultProps = {size: "medium", borderWidth: "small", borderColor: "black", borderStyle: 'solid'}