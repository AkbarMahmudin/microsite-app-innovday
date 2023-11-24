"use client";

import React from "react";

// components
import { CardItem } from "@/components/custom/card";

const EventList = ({ events = [] }: { events: any }) => {
  return (
    <>
      <section className="container min-w-full grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 justify-start">
        {events.map((event: any, index: number) => (
          <CardItem key={index} {...event} />
        ))}
      </section>
    </>
  );
};

export default EventList;
