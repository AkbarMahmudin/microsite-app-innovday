"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/scrollbar";

import "./style.css";

import { Autoplay } from "swiper/modules";
import { TestimoniCard } from "../card";
import { cn } from "@/lib/utils";

// type
import { Testimoni } from "@/types";

type Props = {
  direction?: "vertical" | "horizontal";
  className?: string;
  style?: React.CSSProperties;
  data: Testimoni[];
};

const SwiperInfinite = ({
  data,
  direction = "vertical",
  className,
  style,
}: Props) => {
  return (
    <Swiper
      direction={direction}
      slidesPerView={"auto"}
      spaceBetween={30}
      freeMode={true}
      scrollbar={false}
      mousewheel={true}
      grabCursor={true}
      modules={[Autoplay]}
      autoplay={{
        delay: 0,
        disableOnInteraction: false,
      }}
      speed={11000}
      loop={true}
      className={cn("mySwiper", className)}
      style={style}
    >
      {data.map((testimony, index) => (
        <SwiperSlide key={index} style={{ height: "auto" }}>
          <TestimoniCard
            name={testimony.name}
            title={testimony.title}
            job={testimony.job}
            description={testimony.description}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperInfinite;
