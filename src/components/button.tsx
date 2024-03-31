import { Button as MuiButton, ButtonProps } from "@mui/material";

type Props = ButtonProps;

export function Button({ ...rest }: Props) {
  return <MuiButton {...rest} />;
}
