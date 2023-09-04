export type HorizontalAlignment = "left" | "right" | "center" | "justify";
export type AlignSelf =
  | "stretch"
  | "flex-start"
  | "flex-end"
  | "center"
  | "baseline";

export interface BasicProps extends ReactJSX {
  id?: number | string;
  content: string;
  subContent?: string;
  description?: string;
  uri?: string;
  styleProps?: {};
  horizontalAlignment?: HorizontalAlignment;
  alignSelf?: AlignSelf;
  bgColor?: string;
}

export interface ReactJSX {
  icon?: React.ReactNode;
}

export interface GitRepoProps {
  id?: number;
  name?: string;
  full_name?: string;
  html_url?: string;
  url?: string;
  description?: string;
  created_at?: string;
  updated_at?: string;
  homepage?: string;
  html_url?: string;
  private?: boolean;
}

export interface ShareAPIDataProps {
  isLoading?: boolean;
  horizontal?: boolean;
  apiData?: GitRepoProps[];
}

export interface SpaceAround {
  marginTop?: number;
  marginBottom?: number;
  marginLeft?: number;
  marginRight?: number;
  marginVertical?: number;
  marginHorizontal?: number;
}

export interface ViewProfileProps {
  name?: string;
  uri?: string;
  icon?: ReactJSX;
  type?: "linkedin" | "github";
  view?: string;
}
