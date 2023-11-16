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
    | "smartphone";
  className?: string;
};

const Maskot = ({ variant, className }: Props) => {
  const maskotSrc = {
    base: "/maskot/base.png",
    bulb: "/maskot/bulb.png",
    dslr: "/maskot/dslr.png",
    intercom: "/maskot/intercom.png",
    laptop: "/maskot/laptop.png",
    microphone: "/maskot/microphone.png",
    smartphone: "/maskot/smartphone.png",
  };

  return (
    <Image
      src={maskotSrc[variant]}
      alt={`Maskot ${variant} Innovation Day`}
      width={300}
      height={300}
      className={className}
    />
  );
};

export default Maskot;
