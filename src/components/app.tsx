
import { Title } from "./title";
import { SeparatorBlock } from "./separatorBlock";
import { PoppingBlock } from "./poppingBlock";
import { Image } from "./image";
import { Paragraph } from "./paragraph";
import Tiger from '../media/tiger.jpg'

export const App = () => {
    return (
        <div>
            <Title level={1} />
            <SeparatorBlock borderColor="red"/>
            <Paragraph  text="TETETETETETET"></Paragraph>
            <PoppingBlock>
                Test Content
            </PoppingBlock>
            <Image src={Tiger}></Image>
        </div>
    )
}