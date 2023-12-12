"use client";

import React, { useCallback } from "react";

// copywrite
import { home } from "@/_mock/copywriting";
import { Badge } from "@/components/custom/badge";
import { Tabs } from "@/components/custom/tabs";
import Maskot from "@/components/maskot";

const cp = home.content["our-vision"];

const HomeOurVision = () => {
  const defaultTab = cp.tabs[0].title.toLocaleLowerCase();

  const maskot = {
    learn: "laptop",
    share: "microphone",
    innovate: "bulb",
  } as any;

  const [activeTab, setActiveTab] = React.useState(defaultTab);

  const handleChangeTab = useCallback((value: string) => {
    setActiveTab(value);
  }, []);

  return (
    <section className="container gap-4 flex flex-col lg:grid lg:grid-rows-3 lg:grid-flow-col py-20">
      <div className="our-vision__header flex flex-col gap-4 justify-start items-start lg:col-span-2">
        <Badge size="small">{cp.tag}</Badge>
        <h2 className="text-2xl font-bold">{cp.title}</h2>
      </div>
      <Tabs
        defaultValue={defaultTab}
        data={cp.tabs}
        onChangeTab={handleChangeTab}
        className="row-span-2 col-span-2 order-last lg:order-none"
      />
      <Maskot
        variant={maskot[activeTab]}
        className="sm:w-full md:w-[70%] lg:w-full mx-auto px-20 bg-[url('/background/our-vision.webp')] bg-no-repeat lg:bg-[length:300px] bg-[length:180px] bg-right lg:row-span-3"
      />
    </section>
  );
};

export default HomeOurVision;
