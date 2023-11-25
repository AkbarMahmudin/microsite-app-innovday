"use client";

import { SlidoEmbed } from "@/components/custom/embed";
import { Tabs } from "@/components/custom/tabs";
import useBreakpoint from "@/hooks/useBreakPoint";
import { cn } from "@/lib/utils";
import React from "react";

const Description = () => (
  <div className="tracking-wide">
    <p className="font-semibold">Hi, Sobat Innov!</p>
    <p>
      Menjadi live streamers tentunya membutuhkan banyak keterampilan untuk
      membuat konten yang unik dan menarik. Selain itu, kamu juga harus bisa
      mempersonalisasi branding creator sebagai live streamers, lho. Penasaran
      keterampilan apa lagi yang dibutuhkan untuk menjadi live streamers yang
      sukses?
    </p>
    <p>
      Ayo saksikan tayangan Innovation Day dengan judul “How Create a
      Personalized & Engaging Streaming Content” pada Kamis, 21 September 2023
      pukul 10.00-11.00 WIB bersama Agi dan Oci selaku live streamers game.
    </p>
    <p>Menangkan saldo LinkAja bagi yang beruntung!</p>
    <p>Stay healthy, stay productive. Innovation Day, Learn. Share. Innovate</p>
  </div>
);

type Props = {
  publishedAt: string;
  title: string;
  content: string | React.ReactNode;
  slidoSrc: string;
  className?: string;
};

const Content = ({
  publishedAt,
  title,
  content,
  slidoSrc,
  className,
}: Props) => {
  const breakpoint = useBreakpoint();

  const dataTabs = [
    {
      title: "Deskripsi",
      content,
    },
    {
      title: "QnA & Quiz",
      content: (
        <div className="rounded-md max-h-[60vh] overflow-auto">
          <SlidoEmbed
            src={slidoSrc}
            title="Slido"
            className="h-[calc(100vh-6rem)]"
          />
        </div>
      ),
    },
  ];

  return (
    <section
      className={cn(
        "lg:px-0 container min-w-full flex flex-col gap-5 pt-0 lg:pr-1.5 text-base",
        className
      )}
    >
      <div className="content__header flex flex-col gap-2">
        <time
          className="text-[11px] text-gray-500 font-normal tracking-wide"
          dateTime="2020-03-16 12:00"
        >
          {publishedAt}
        </time>
        <h1 className="text-base font-bold leading-tight">{title}</h1>
      </div>

      {breakpoint === "lg" || breakpoint === "xl" ? (
        typeof content !== "string" ? content : (
          <div
            dangerouslySetInnerHTML={
              typeof content === "string"
                ? { __html: content }
                : undefined
            }
          ></div>
      )
      ) : (
        <Tabs data={dataTabs} defaultValue="deskripsi" />
      )}
    </section>
  );
};

export default Content;
