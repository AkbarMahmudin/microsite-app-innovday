// CARD ITEM
"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../../ui/card";
import Link from "next/link";
import Image from "next/image";
import { fExcerpt } from "@/lib/format-string";
import { fDate } from "@/lib/format-time";
import { cn } from "@/lib/utils";

const CardImage = ({ imageUrl }: { imageUrl: string }) => (
  <div className="relative overflow-hidden">
    <Image
      src={imageUrl || "https://picsum.photos/300/300"}
      alt="Hacktoberfest"
      width={300}
      height={300}
      className="object-cover w-full"
    />
    <div className="h-7 px-3 bg-cyan-100 rounded-[20px] border border-primary backdrop-blur-[5px] justify-start items-start gap-2.5 inline-flex absolute top-3 right-3">
      <div className="text-primary lg:text-sm text-xs font-semibold uppercase lg:leading-7 leading-6 lg:tracking-wide tracking-tight">
        Innovation Day
      </div>
    </div>
  </div>
);

type Props = {
  thumbnailUrl: string;
  title: string;
  description: string;
  date: Date | string;
  url: string;
  excerptLength?: number;
  className?: string;
};

const CardItem = ({
  title,
  description,
  date,
  url,
  thumbnailUrl,
  excerptLength,
  className,

}: Props) => {
  return (
    <Card className={cn("overflow-hidden", className)}>
      <CardImage imageUrl={thumbnailUrl} />
      <CardHeader className="pb-3 px-4">
        <time
          dateTime={date.toString()}
          className="text-xs font-normal tracking-wide text-muted-foreground mb-3"
        >
          {fDate(date)}
        </time>
        <Link
          href={url}
          className="inline-flex flex-row justify-between items-start"
        >
          <CardTitle className="text-base font-bold">{title}</CardTitle>
          <svg
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.34323 18.5669L17.6569 7.25315M17.6569 7.25315H9.17165M17.6569 7.25315V15.7384"
              stroke="black"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </CardHeader>
      <CardContent className="text-sm font-normal text-justify px-4">
        {fExcerpt(description, excerptLength)}
      </CardContent>
    </Card>
  );
};

export default CardItem;
