import { Stepper as MuiStepper, Step, StepLabel } from "@mui/material";

type Props = {
  steps: {
    id: number;
    label?: string;
  }[];
  activeStep: number;
};

export function Stepper({ steps, activeStep }: Props) {
  return (
    <MuiStepper activeStep={activeStep} alternativeLabel>
      {steps.map(({ id, label }) => (
        <Step key={id}>
          <StepLabel>{label}</StepLabel>
        </Step>
      ))}
    </MuiStepper>
  );
}
