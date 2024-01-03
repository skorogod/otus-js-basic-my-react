import { FC } from "react";
import { imageCompProps } from "./types"

export const Image: FC<imageCompProps> = (props: imageCompProps) => {
    return (
        <img src={props.src} title={props.title ? props.title : ""} alt={props.alt ? props.alt : ""}></img>
    )
}