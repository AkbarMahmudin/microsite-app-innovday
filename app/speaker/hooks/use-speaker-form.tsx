import { useState } from "react";

type Speaker = {
  personal: {
    name: string;
    email: string;
    noHp: string;
    job: string;
    company: string;
    address: string;
  };
  socialMedia: {
    portofolio: string;
    linkedin: string;
    instagram?: string;
    tiktok?: string;
  };
  materi: {
    title: string;
    isAgree: boolean;
    categories: string[];
    description: string;
    availability: "luring" | "daring";
    targetAudience: "telkom group" | "telkom ddb" | "umum";
  };
};

const useSpeakerForm = () => {
  const [speaker, setSpeaker] = useState<Speaker>({
    personal: {
      name: "",
      email: "",
      noHp: "",
      job: "",
      company: "",
      address: "",
    },
    socialMedia: {
      portofolio: "",
      linkedin: "",
      instagram: "",
      tiktok: "",
    },
    materi: {
      title: "",
      isAgree: false,
      categories: [],
      description: "",
      availability: "daring",
      targetAudience: "umum",
    },
  });

  return {
    speaker,
    setSpeaker,
  };
};

export default useSpeakerForm;
