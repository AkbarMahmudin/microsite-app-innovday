"use client";

import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./style.css";

// import required modules
import SlideNavigation from "./slide-navigation";
import Image from "next/image";

type Props = {
  data: {
    title: string;
    description: string;
    imageUrl: string;
  }[];
  navigation?: boolean;
  navigationPosition?: "left" | "right";
  fromLast?: boolean;
};

const SwiperHorizontal = ({
  data,
  navigation = true,
  navigationPosition = "right",
  fromLast = false,
}: Props) => {
  const [activeIndex, setActiveIndex] = React.useState(0);

  return (
    <>
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={screen.width > 768 ? 30 : 10}
        initialSlide={fromLast ? data.length - 1 : 0}
        className="mySwiper h-full w-full flex flex-col"
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
      >
        {navigation && (
          <SlideNavigation
            navigationPosition={navigationPosition}
            activeIndex={activeIndex}
            lengthItems={data.length}
          />
        )}
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div className="rounded-lg overflow-hidden">
                    <Image
                      src={item.imageUrl}
                      alt={item.title}
                      width={300}
                      height={300}
                      className="h-full w-full"
                    />
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{item.title}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default SwiperHorizontal;
