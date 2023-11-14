import { Badge } from "@/components/custom/badge";
import React from "react";

// copywrite
import { home } from "@/_mock/copywriting";

import Image from "next/image";
import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { SwiperSlider } from "@/components/custom/swiper";

const cp = home.content["our-events"];

const EventDescription = () => (
  <div className="flex flex-col justify-center items-start gap-4">
    <Badge size="small">{cp.tag}</Badge>
    <h2 className="text-2xl font-bold">{cp.title}</h2>
    <p className="text-sm font-normal self-stretch">{cp.description}</p>
  </div>
);

const Event = ({
  type,
  direction = "left",
}: {
  type: "innovation-day" | "in-talks";
  direction?: "left" | "right";
}) => (
  <div className={`flex lg:flex-row flex-col lg:justify-between justify-start items-center lg:gap-10 gap-4 ${direction === 'right' ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
    <div className="flex flex-col justify-start gap-4 lg:w-2/5 lg:pr-5 lg:my-auto">
      <Image
        src={cp[type].logo}
        alt="Logo Innovation Day"
        width={300}
        height={300}
        className={type === "innovation-day" ? "lg:w-[200px] w-3/4" : "w-2/5"}
      />
      <p className="text-sm font-normal">{cp[type].description}</p>
      <Link
        href={cp[type].cta.url}
        className={buttonVariants({
          variant: "link",
          size: "sm",
          className: "w-fit pl-0",
        })}
        style={{ color: "#000" }}
      >
        {cp[type].cta.label}
        <ArrowRight className="ml-2" size={24} />
      </Link>
    </div>
    <div className="lg:w-3/5">
      <SwiperSlider data={cp[type].preview} navigationPosition={screen.width > 768 ? direction : 'right'} fromLast={screen.width > 768 && direction === 'left'} />
    </div>
  </div>
);

const OurEvents = () => {
  return (
    <section className="container flex flex-col gap-20 min-w-full bg-[url('/background/our-event.png')] bg-no-repeat lg:bg-[length:300px] bg-[length:200px] lg:bg-[right_bottom_14rem] bg-[right_bottom_30rem]">
      <EventDescription />
      <Event direction="right" type="innovation-day" />
      <Event type="in-talks" />
    </section>
  );
};

export default OurEvents;
