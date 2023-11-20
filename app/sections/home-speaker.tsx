"use client";

import React from "react";
import Link from "next/link";

// copywrite
import { home } from "@/_mock/copywriting";

// components
import { Badge } from "@/components/custom/badge";
import { buttonVariants } from "@/components/ui/button";
import { List } from "@/components/custom/list";
import Maskot from "@/components/maskot";

const cp = home.content.speaker;

const BeOurSpeaker = () => {
  return (
    <section className="container flex flex-col justify-center items-start gap-4 min-w-full">
      <div className="md:relative flex flex-col justify-center items-start gap-4 w-full mb-4">
        <Badge size="small">{cp.tag}</Badge>
        <div className="flex flex-col flex-wrap lg:flex-row gap-4 justify-between lg:items-center items-start w-full">
          <h2 className="text-2xl font-bold">{cp.title}</h2>
          <Link
            href={cp.cta.url}
            className={buttonVariants({
              variant: "default",
              size: "sm",
            })}
          >
            {cp.cta.label}
          </Link>
        </div>
        <p className="text-sm md:text-base font-normal self-stretch">{cp.description}</p>

        <div className="flex flex-col lg:grid lg:grid-cols-2 items-center lg:gap-20 w-full">
          <div className="justify-center items-center inline-flex relative w-fit mx-auto">
            <div className="w-[240px] h-[220px] lg:w-[368px] lg:h-[348px] bg-gradient-to-br from-teal-500 to-primary rounded-xl  backdrop-blur-[110.64px] absolute bottom-3 right-0"></div>
            <div className="relative">
              <Maskot variant="microphone" className="z-10 lg:w-[480px]" />
            </div>
          </div>
          <List variant="striped" data={cp.benefits} />
        </div>
      </div>
    </section>
  );
};

export default BeOurSpeaker;
