import {
  HeadingSkeleton,
  ParagrafSkeleton,
  TaglineSkeleton,
} from "@/components/custom/skeleton";
import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const Loading = () => {
  return (
    <>
      <section className="container grid lg:grid-cols-3 grid-cols-1 justify-between items-center min-w-full lg:gap-6 gap-2">
        <Skeleton className="w-full h-96 rounded-md col-span-2" />
        <Skeleton className="w-full h-96 rounded-md md:block hidden" />
      </section>

      <section className="container grid lg:grid-cols-3 grid-cols-1 justify-between items-center min-w-full lg:gap-6 gap-2">
        <div className="flex flex-col gap-4 col-span-2">
          <TaglineSkeleton />
          <HeadingSkeleton />
          <ParagrafSkeleton />
        </div>
        <Skeleton className="w-full md:h-96 h-32 rounded-md" />
      </section>
    </>
  );
};

export default Loading;
