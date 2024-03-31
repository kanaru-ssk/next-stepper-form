import { ButtonProps, Button as MuiButton } from "@mui/material";

type Props = ButtonProps;

export function Button({ ...rest }: Props) {
  return <MuiButton {...rest} />;
}
