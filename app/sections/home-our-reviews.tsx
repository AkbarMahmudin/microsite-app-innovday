import React from "react";
import Link from "next/link";

// copywrite
import { home } from "@/_mock/copywriting";

import { Badge } from "@/components/custom/badge";
import { SwiperInfinite } from "@/components/custom/swiper";
import { buttonVariants } from "@/components/ui/button";

const cp = home.content["our-reviews"];

const OurReviews = () => {
  return (
    <section className="container bg-gradient-to-br from-teal-500 text-white to-primary flex md:flex-row flex-col justify-center md:items-center items-start gap-4">
      <div className="reviews__description md:w-2/5 flex flex-col justify-center items-start gap-4">
        <Badge size="small" className="bg-white bg-opacity-70">
          {cp.tag}
        </Badge>
        <h2 className="text-2xl font-bold">{cp.title}</h2>
        <p className="text-sm font-normal self-stretch">{cp.description}</p>
        <Link
          href={cp.cta.url}
          className={buttonVariants({
            variant: "outline",
            className:
              "text-white border-white bg-transparent rounded-md border-2",
          })}
        >
          {cp.cta.label}
        </Link>
      </div>
      <div className="md:w-3/5 grid lg:grid-cols-2 grid-cols-1 gap-10">
        <div className="h-[400px]">
          <SwiperInfinite data={cp.testimonies} />
        </div>
        <div className="h-[400px] lg:flex hidden">
          <SwiperInfinite
            data={cp.testimonies}
            style={{
              paddingTop: "50px",
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default OurReviews;
