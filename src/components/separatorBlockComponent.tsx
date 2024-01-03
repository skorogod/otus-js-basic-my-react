import { FC } from "react";
import { separatorCompProps } from "./types";

export const SeparatorBlock: FC<separatorCompProps> = (props: separatorCompProps) => {
    return <div style={{height:`${props.height}px`, display: "flex", alignItems: "center"}}>
        <div style={{width:"100%", borderBottom: `${props.borderWidth}px ${props.borderStyle} ${props.borderColor}`}}></div>
    </div>
}

SeparatorBlock.defaultProps = {height: 10, borderWidth: 1, borderColor: "black", borderStyle: 'solid'}