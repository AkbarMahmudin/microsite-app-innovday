import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

// copywrite
import { home } from "@/_mock/copywriting";

// components
import { buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/custom/badge";
import { Card, CardContent } from "@/components/ui/card";
import Maskot from "@/components/maskot";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { YoutubeEmbed } from "@/components/custom/embed";

const cp = home.content.hero;

const PopUp = () => (
  <Card className="w-fit z-10 absolute md:-left-16 -left-1 md:-top-8 top-6">
    <CardContent className="md:py-6 py-3 md:px-3 px-3 w-full text-center">
      <p className="md:text-[40px] text-xl font-bold md:leading-[48px] leading-normal">
        80K
      </p>
      <p className="md:text-base text-[8px] font-normal md:leading-7 leading-3 md:tracking-wide tracking-tight">
        Success Event
      </p>
    </CardContent>
  </Card>
);

const EmbedVideo = () => (
  <AspectRatio ratio={16 / 9} className="-z-0 rounded-md">
    <YoutubeEmbed
      src="mnGM5HsBZ-8"
      className="w-full h-full rounded-md"
      title="About Innovation Day"
    />
  </AspectRatio>
);

const Hero = () => {
  return (
    <section className="hero container grid lg:grid-cols-2 grid-cols-1 justify-between items-center min-h-[calc(100vh-10rem)] max-h-screen min-w-full bg-bg-hero md:bg-cover bg-contain bg-top bg-no-repeat">
      <div className="hero__content lg:order-first order-last">
        <div className="hero__header mb-5">
          <h1 className="md:text-[32px] text-2xl font-bold leading-[64px]">
            Innovation{" "}
            <Badge size="large" className="font-bold leading-normal">
              Day
            </Badge>
          </h1>
          <strong className="md:text-xl text-base font-semibold leading-tight">
            {cp.tagline}
          </strong>
        </div>

        <p className="hero__description md:text-base text-sm font-normal leading-normal">
          {cp.description}
        </p>

        <div className="hero__cta flex flex-row flex-wrap md:justify-start justify-between md:gap-5 gap-0 mt-8 w-full">
          {/* <Link
            href={cp.cta["our-events"].url}
            className={buttonVariants({
              variant: "default",
              size: "lg",
              className: "w-full md:w-auto",
            })}
          >
            {cp.cta["our-events"].label}
          </Link> */}

          <Link
            href={cp.cta["our-speakers"].url}
            className={buttonVariants({
              size: "lg",
            })}
            // style={{ color: "#000" }}
          >
            {cp.cta["our-speakers"].label}
            <ArrowRight size={24} />
          </Link>
        </div>
      </div>

      <div className="hero__image w-full relative md:px-4 px-7 md:py-9 py-14">
        <PopUp />
        <EmbedVideo />
        <Maskot
          variant="base"
          className="absolute md:-right-28 -right-4 md:-bottom-28 -bottom-4 md:w-[265px] w-[125px]"
        />
      </div>
    </section>
  );
};

export default Hero;
