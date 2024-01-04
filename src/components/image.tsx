import { FC } from "react";
import React from "react";
import { imageCompProps } from "./types";
import "./image.css";

export const Image: FC<imageCompProps> = (props: imageCompProps) => {
    return (
        <img className={["image", props.size ? `image--${props.size}` : '',  props.imageRound ?  "image--round" : ""].join(' ')} style={{borderWidth: props.borderWidth, 
                    borderStyle: props.borderStyle,
                    borderRadius: props.borderRadius}} 
                src={props.src} title={props.title ? props.title : ""} 
                alt={props.alt ? props.alt : ""}>
                
        </img>
    )
}