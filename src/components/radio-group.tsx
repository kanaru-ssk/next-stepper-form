import {
  RadioGroup as MuiRadioGroup,
  type RadioGroupProps,
} from "@mui/material";

type Props = RadioGroupProps;

export function RadioGroup({ ...rest }: Props) {
  return <MuiRadioGroup {...rest} />;
}
