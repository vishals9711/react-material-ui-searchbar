import { SxProps, TextFieldProps } from "@mui/material";

export interface SearchComponentProps {
    placeholder?: string;
    onChangeHandle?: (value: string) => void;
    initialValue?: string;
    sx?: SxProps;
    svgFontSize?: 'inherit' | 'medium' | 'large' | 'small';
    inputLabelProps?: TextFieldProps
}