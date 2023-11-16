"use client";

import React from "react";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Mousewheel, Scrollbar } from "swiper/modules";

// copywrite
import { home } from "@/_mock/copywriting";

// components
import { Badge } from "@/components/custom/badge";
import { CardItem } from "@/components/custom/card";
import { buttonVariants } from "@/components/ui/button";

const cp = home.content["latest-events"];

type EventListProps = {
  data: {
    thumbnailUrl: string;
    title: string;
    description: string;
    date: string;
    url: string;
  }[];
};

const EventList = ({ data }: EventListProps) => {
  return (
    <>
      {/* Mobile */}
      <div className="md:hidden w-[90vw]">
        <Swiper
          direction={"horizontal"}
          slidesPerView={"auto"}
          spaceBetween={10}
          freeMode={true}
          scrollbar={false}
          mousewheel={true}
          grabCursor={true}
          modules={[FreeMode, Scrollbar, Mousewheel]}
        >
          {data.slice(0, 3).map((event, index) => (
            <SwiperSlide key={index} style={{ height: "auto", width: "80%" }}>
              <CardItem {...event} excerptLength={100} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Desktop & Tablet */}
      <div className="md:grid hidden grid-cols-3 lg:gap-[30px] gap-4">
        {data.slice(0, 3).map((event, index) => (
          <CardItem key={index} {...event} excerptLength={100} />
        ))}
      </div>
    </>
  );
};

const LatestEvent = () => {
  return (
    <section className="container flex flex-col justify-center items-start gap-4 min-w-full bg-[url('/background/latest-event.png')] bg-no-repeat bg-[length:96px] bg-left-top">
      <div className="md:relative flex flex-col justify-center items-start gap-4 w-full mb-4">
        <Badge size="small">{cp.tag}</Badge>
        <h2 className="text-2xl font-bold">{cp.title}</h2>
        <Link
          href={cp.cta.url}
          className={buttonVariants({
            variant: "default",
            size: "sm",
            className:
              "md:absolute md:top-1/2 md:transform md:-translate-y-1/2 md:right-0",
          })}
        >
          {cp.cta.label}
        </Link>
        <p className="text-sm font-normal self-stretch">{cp.description}</p>
      </div>

      <EventList data={cp.events} />
    </section>
  );
};

export default LatestEvent;
