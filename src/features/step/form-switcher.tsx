import { RadioCardForm } from "../radio-card-form";

type Props = {
  currentStep: number;
};

export function FormSwitcher({ currentStep }: Props) {
  if (currentStep === 0) return <RadioCardForm />;
  if (currentStep === 1) return <div>step 2</div>;
  if (currentStep === 2) return <div>step 3</div>;
  return <div>complete</div>;
}
