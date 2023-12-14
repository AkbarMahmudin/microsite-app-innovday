"use client";

import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";
import React from "react";
import { Countdown } from "../countdown";

export type Props = {
  text: string;
  cta: {
    label: string;
    href: string;
  };
  startDate?: Date;
};

const Announcement = ({ text, cta, startDate }: Props) => {
  return (
    <div className="w-full bg-primary text-white flex flex-row md:justify-center justify-between items-center py-5 md:gap-8 px-4 md:text-sm text-[11px] font-medium">
      <div className="inline-flex md:flex-row flex-col md:gap-8 text-center items-center justify-between">
        <p>{text}</p>
        <Countdown startDate={startDate} />
      </div>
      <Link
        href={cta.href}
        className="md:text-lg text-xs font-semibold text-amber-400 flex flex-row items-center gap-1"
        title={cta.label}
      >
        {cta.label}
        <Icon icon="pajamas:long-arrow" width={24} className="text-amber-400" />
      </Link>
    </div>
  );
};

export default Announcement;
