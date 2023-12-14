"use client";

import { useSwiper } from "swiper/react";
import { Button } from "../button";
import { Icon } from "@iconify/react/dist/iconify.js";

type Props = {
  navigationPosition?: "left" | "right";
  lengthItems: number;
  activeIndex: number;
};

const SlideNavigation = ({
  navigationPosition,
  lengthItems,
  activeIndex,
}: Props) => {
  const swiper = useSwiper();

  const position =
    navigationPosition === "left" ? "justify-start" : "justify-end";

  return (
    <div className={"flex flex-row gap-5 mb-5 " + position}>
      <Button
        variant="secondary"
        size="icon"
        className="rounded-full w-8 h-8 m-1"
        type="button"
        onClick={() => swiper.slidePrev()}
        disabled={activeIndex === 0}
        name="prev-button"
      >
        <Icon icon="uil:arrow-left" width={28} />
      </Button>
      <Button
        variant="secondary"
        size="icon"
        className="rounded-full w-8 h-8 m-1"
        type="button"
        onClick={() => swiper.slideNext()}
        disabled={activeIndex === lengthItems - 1}
        name="next-button"
      >
        <Icon icon="uil:arrow-right" width={28} />
      </Button>
    </div>
  );
};

export default SlideNavigation;
