"use client";

import { Badge } from "@/components/custom/badge";
import { CardItem } from "@/components/custom/card";
import { SwiperSlider } from "@/components/custom/swiper";
import { buttonVariants } from "@/components/ui/button";
import useBreakpoint from "@/hooks/useBreakPoint";
import { cn } from "@/lib/utils";
import Link from "next/link";

type Props = {
  title: string;
  description: string;
  cta: {
    label: string;
    url: string;
  };
  events: any[];
  className?: string;
};

const renderEventItems = (events: any[]) => {
  return events.map((event, index) => (
    <CardItem
      key={index}
      title={event.title}
      description={event.description}
      thumbnailUrl={event.thumbnailUrl}
      date={event.publishedAt}
      url={`/events/${event.id}`}
    />
  ));
};

const RelatedEvents = ({
  title,
  description,
  cta,
  events,
  className,
}: Props) => {
  const breakpoint = useBreakpoint();

  const titleSplited = title.split(" ");

  const slideDesktopStyle =
    breakpoint !== "xs" && breakpoint !== "sm" && breakpoint !== "md"
      ? {
          minWidth: "10%",
          width: "40%",
        }
      : {};

  return (
    <section
      className={cn(
        "container min-w-full flex flex-col lg:flex-row items-start lg:items-center lg:w-2/5 gap-2 lg:gap-14",
        className
      )}
    >
      <div className="related-events__content flex flex-col items-start gap-2 lg:px-8 lg:mt-10">
        <h2 className="text-2xl font-bold leading-[30px]">
          {titleSplited.slice(0, titleSplited.length - 1).join(" ")}
          <Badge className="ml-2 text-2xl font-bold leading-[30px]">
            {titleSplited[titleSplited.length - 1]}
          </Badge>
        </h2>

        <p className="text-sm lg:text-base font-normal lg:leading-normal">
          {description}
        </p>

        <Link href={cta.url} passHref className={buttonVariants()}>
          {cta.label}
        </Link>
      </div>

      <SwiperSlider
        data={renderEventItems(events)}
        navigationPosition="right"
        slideItemStyle={slideDesktopStyle}
      />
    </section>
  );
};

export default RelatedEvents;
