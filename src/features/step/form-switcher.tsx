import { RadioCardForm } from "../radio-card-form";

type Props = {
  currentStep: number;
};

export function FormSwitcher({ currentStep }: Props) {
  if (currentStep === 0) return <RadioCardForm />;
  return null;
}
