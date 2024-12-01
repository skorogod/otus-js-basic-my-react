import { FC } from "react";
import React from "react";
import { poppingCompProps } from "./types";

export const PoppingBlock: FC<poppingCompProps> = (props: poppingCompProps) => {
  return (
    <details>
      <summary>{props.summary}</summary>
      <div>{props.children}</div>
    </details>
  );
};

PoppingBlock.defaultProps = { summary: "Подробности" };
