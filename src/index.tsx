import React from "react";
import ReactDOM  from "react-dom";
import { createRoot } from "react-dom/client"

import { Title } from "./components/titleComponent";
import { SeparatorBlock } from "./components/separatorBlockComponent";
import { PoppingBlock } from "./components/poppingBlockComponent";
import { Image } from "./components/imageComponent";
import Tiger from './media/tiger.jpg'

const rootEl = document.getElementById("root") as HTMLElement;
const root = createRoot(rootEl);


const App = () => {
    return (
        <div>
            <Title level={1} />
            <SeparatorBlock height={100} borderColor="red"/>
            <PoppingBlock>
                <Image src={Tiger}></Image>
            </PoppingBlock>
        </div>
    )
}
root.render(<App />)