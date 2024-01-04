import React from "react";
import ReactDOM  from "react-dom";
import { createRoot } from "react-dom/client"
import { App } from "./components/app";
import "./components/separatorBlock.css"



const rootEl = document.getElementById("root") as HTMLElement;
const root = createRoot(rootEl);

root.render(<App />)