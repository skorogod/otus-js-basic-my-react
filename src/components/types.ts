type titleLevel =  1 | 2 | 3 | 4 | 5 | 6

export type titleCompProps = {
    level?: titleLevel;
    text?: string;
}

export type poppingCompProps = {
    summary?: string;
    children?: any;
}

export type separatorCompProps = {
    size?: 'small' | 'medium' | 'large';
    borderWidth?: 'small' | 'medium' | 'large';
    borderColor?: string;
    borderStyle?: string;
}

export type imageCompProps = {
    src: string;
    size?: "small" | "medium" | "large";
    title?: string;
    alt?: string;
    borderWidth?: string;
    borderStyle?: string;
    borderRadius?: string
    imageRound?: true | false | undefined;
}

export type paragraphProps = {
    text: string;
    fontFamily?: string;
    fontSize?: string;
    fontWeight?: string | number;
    color?: string;
}