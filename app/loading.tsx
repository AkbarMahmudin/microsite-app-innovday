import {
  ButtonSkeleton,
  HeadingSkeleton,
  ImageSkeleton,
  ParagrafSkeleton,
  TaglineSkeleton,
} from "@/components/custom/skeleton";
import React from "react";

const Loading = () => {
  return (
    <>
      <section className="container grid lg:grid-cols-2 grid-cols-1 justify-between items-center min-h-[calc(100vh-10rem)] max-h-screen min-w-full lg:gap-6 gap-2">
        <div className="flex flex-col gap-4 lg:order-first order-last">
          <HeadingSkeleton />
          <TaglineSkeleton />
          <ParagrafSkeleton />

          <div className="grid grid-cols-2 gap-2">
            {Array(2)
              .fill(1)
              .map((_, i) => (
                <ButtonSkeleton key={i} />
              ))}
          </div>
        </div>

        <ImageSkeleton />
      </section>

      <section className="container flex flex-col min-w-full items-start justify-start gap-3">
        <HeadingSkeleton className="w-1/2" />
        <ParagrafSkeleton />
      </section>
    </>
  );
};

export default Loading;
