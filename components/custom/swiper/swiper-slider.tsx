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

import "./style.css";

// import required modules
import SlideNavigation from "./slide-navigation";
import Image from "next/image";

// type
import { EventPreview } from "@/types";

type Props = {
  data: EventPreview[];
  navigation?: boolean;
  navigationPosition?: "left" | "right";
  fromLast?: boolean;
  action?: (id: number | string) => void;
};

const SwiperSlider = ({
  data,
  navigation = true,
  navigationPosition = "right",
  fromLast = false,
  action,
}: Props) => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [widthScreen, setWidthScreen] = React.useState(10);

  React.useEffect(() => {
    screen.width > 768 ? setWidthScreen(30) : setWidthScreen(10);
  }, [widthScreen]);

  const handleClick = (id: number | string) => {
    action && action(id);
  };

  return (
    <Swiper
      slidesPerView={"auto"}
      spaceBetween={widthScreen}
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
                <div
                  className="rounded-lg overflow-hidden"
                  onClick={() => handleClick(item.id)}
                >
                  <Image
                    src={item.imageUrl}
                    alt={item.title}
                    width={300}
                    height={300}
                    className={`h-full w-full ${action && "cursor-pointer"}`}
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
  );
};

export default SwiperSlider;
