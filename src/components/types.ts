type titleLevel =  1 | 2 | 3 | 4 | 5 | 6

export type titleCompProps = {
    level?: titleLevel;
    text?: string;
}

export type poppingCompProps = {
    summary?: string;
    children: any;
}

export type separatorCompProps = {
    height?: number;
    borderWidth?: number;
    borderColor?: string;
    borderStyle?: string;
}

export type imageCompProps = {
    src: string;
    title?: string;
    alt?: string;
}