import { useState } from "react";

type Props = {
  length: number;
};

export function useStep({ length }: Props) {
  const [currentStep, setCurrentStep] = useState(0);
  const disabledNextStep = currentStep >= length;
  const disabledPrevStep = currentStep <= 0;
  function nextStep() {
    setCurrentStep((prev) => (prev < length ? prev + 1 : prev));
  }
  function prevStep() {
    setCurrentStep((prev) => (prev > 0 ? prev - 1 : 0));
  }

  return {
    currentStep,
    disabledNextStep,
    disabledPrevStep,
    nextStep,
    prevStep,
  };
}
