"use client";

import { Button } from "@/components/button";
import { Stepper } from "@/components/stepper";
import { useStep } from "@/features/step/use-step";
import { FormSwitcher } from "./form-switcher";
import { steps } from "./steps";

export function Step() {
  const {
    currentStep,
    disabledNextStep,
    disabledPrevStep,
    nextStep,
    prevStep,
  } = useStep({ length: steps.length });

  return (
    <div>
      <Stepper steps={steps} currentStep={currentStep} />
      <div className="py-10">
        <FormSwitcher currentStep={currentStep} />
      </div>
      <div className="flex justify-between">
        <Button
          onClick={prevStep}
          variant="outlined"
          disabled={disabledPrevStep}
        >
          prev
        </Button>
        <Button
          onClick={nextStep}
          variant="contained"
          disabled={disabledNextStep}
        >
          next
        </Button>
      </div>
    </div>
  );
}
