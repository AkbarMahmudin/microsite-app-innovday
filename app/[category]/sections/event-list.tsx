"use client";

import React from "react";

// copywrite
// import { event } from "@/_mock/copywriting";
import { CardItem } from "@/components/custom/card";
import { Paginate } from "@/components/custom/pagination";

// const cp = event;

const EventList = ({ events = [] }: { events: any }) => {
  return (
    <>
      <section className="container min-w-full grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 justify-start">
        {events.map((event: any, index: number) => (
          <CardItem key={index} {...event} />
        ))}
      </section>
      <Paginate page={1} pageCount={10} onPageChange={() => {}} perPage={5} />
    </>
  );
};

export default EventList;
