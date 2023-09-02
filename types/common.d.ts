export interface BasicProps{
    id?: number | string;
    content?: string;
    subContent?: string;
    description?: string;
}

export interface ReactJSX extends BasicProps{
    icon?: React.ReactNode;
}