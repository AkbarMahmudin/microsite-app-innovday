"use client";

import React from "react";

// copywrite
import { home } from "@/_mock/copywriting";
import { Badge } from "@/components/custom/badge";
import { Tabs } from "@/components/custom/tabs";

const cp = home.content["our-vision"];

const HomeOurVision = () => {
  return (
    <section className="container flex flex-col lg:flex-row gap-4 justify-center items-start">
      <div>
        <Badge size="small">{cp.tag}</Badge>
        <h2 className="text-2xl font-bold">{cp.title}</h2>
        <Tabs
          defaultValue={cp.tabs[0].title.toLocaleLowerCase()}
          data={cp.tabs}
        />
      </div>
    </section>
  );
};

export default HomeOurVision;
