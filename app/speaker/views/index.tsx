"use client";

import React from "react";
import { SpeakerForm } from "../sections";

// copywrite
import { speaker } from "@/_mock/copywriting";
import { Breadcrumbs } from "@/components/custom/breadcrumbs";
import { Step } from "@/components/custom/step";
import SpeakerTermCondition from "../sections/speaker-term-condition";

const cp = speaker;

const SpeakerView = () => {
  const { title, steps, statusSection, termsAndConditions } = cp;

  const [step, setStep] = React.useState(1);

  // Change description to component for step 3 (Siapkan Materi)
  const step3 = steps[2];
  steps[2] = {
    ...step3,
    component: (
      <SpeakerTermCondition
        text="ketentuan yang berlaku."
        triggerClassName="text-primary underline"
        {...termsAndConditions}
      />
    ) as any,
  };

  return (
    <>
      <Breadcrumbs links={cp.breadcrumbs} className="container md:pb-0" />
      <section className="container min-w-full grid lg:grid-cols-2 gap-12">
        <Step
          title={title}
          step={step}
          data={steps as any}
          className="h-fit lg:sticky top-24"
        />
        <SpeakerForm
          step={step}
          statusSection={statusSection}
          onStepChange={setStep}
        />
      </section>
    </>
  );
};

export default SpeakerView;
