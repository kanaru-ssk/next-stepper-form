import { Stepper as MuiStepper, Step, StepLabel } from "@mui/material";

type Props = {
  steps: {
    id: number;
    label?: string;
  }[];
  currentStep: number;
};

export function Stepper({ steps, currentStep }: Props) {
  return (
    <MuiStepper activeStep={currentStep} alternativeLabel>
      {steps.map(({ id, label }) => (
        <Step key={id}>
          <StepLabel>{label}</StepLabel>
        </Step>
      ))}
    </MuiStepper>
  );
}
