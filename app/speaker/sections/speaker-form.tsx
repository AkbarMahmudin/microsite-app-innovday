"use client";

import React from "react";
import SpeakerPersonalForm from "./speaker-personal-form";
import SpeakerPortofolioForm from "./speaker-portofolio-form";
import useSpeakerForm from "../hooks/use-speaker-form";
import SpeakerMateriForm from "./speaker-materi-form";
import SpeakerStatus from "./speaker-status";

type Props = {
  onStepChange: React.Dispatch<React.SetStateAction<number>>;
  step: number;
  statusSection: {
    title: string;
    status: string;
    description: string;
  };
};

const SpeakerForm = ({ step, statusSection: statusContent, onStepChange }: Props) => {
  const { speaker, setSpeaker } = useSpeakerForm();

  const { personal, socialMedia, materi } = speaker;

  const handleNext = () => {
    onStepChange(step + 1);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handlePrev = () => {
    onStepChange(step - 1);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const FormDisplay = [
    <SpeakerPersonalForm
      personalValues={personal}
      onSubmit={setSpeaker}
      onNext={handleNext}
      key={0}
    />,
    <SpeakerPortofolioForm
    socialMediaValues={socialMedia}
    onSubmit={setSpeaker}
    onNext={handleNext}
    onPrev={handlePrev}
    key={1}
    />,
    <SpeakerMateriForm
      materiValues={materi}
      onSubmit={setSpeaker}
      onNext={handleNext}
      onPrev={handlePrev}
      key={2}
    />,
    <SpeakerStatus {...statusContent} onPrev={handlePrev} key={3} />,
  ];

  return <div className="lg:pt-6">{FormDisplay[step - 1]}</div>;
};

export default SpeakerForm;
