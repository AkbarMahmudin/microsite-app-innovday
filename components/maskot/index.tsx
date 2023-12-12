import Image from "next/image";
import React from "react";

type Props = {
  variant:
    | "base"
    | "bulb"
    | "dslr"
    | "intercom"
    | "laptop"
    | "microphone"
    | "smartphone"
    | "not-found";
  className?: string;
};

const Maskot = ({ variant, className }: Props) => {
  const maskotSrc = {
    base: "/maskot/base.webp",
    bulb: "/maskot/bulb.webp",
    dslr: "/maskot/dslr.webp",
    intercom: "/maskot/intercom.webp",
    laptop: "/maskot/laptop.webp",
    microphone: "/maskot/microphone.webp",
    smartphone: "/maskot/smartphone.webp",
    "not-found": "/maskot/not-found.png",
  };

  return (
    <Image
      src={maskotSrc[variant]}
      alt={`Maskot ${variant} Innovation Day`}
      width={300}
      height={300}
      className={className}
      priority
      fetchPriority="high"
    />
  );
};

export default Maskot;
