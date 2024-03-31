import { useState } from "react";

type Props = {
  length: number;
};

export function useStep({ length }: Props) {
  const [currentStep, setCurrentStep] = useState(0);
  function nextStep() {
    setCurrentStep((prev) => (prev < length - 1 ? prev + 1 : prev));
  }
  function prevStep() {
    setCurrentStep((prev) => (0 < prev ? prev - 1 : 0));
  }

  return { currentStep, nextStep, prevStep };
}
