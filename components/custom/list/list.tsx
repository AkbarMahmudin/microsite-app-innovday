"use client";

import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../ui/accordion";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const listVariants = cva("px-3 rounded-2xl text-primary w-full", {
  variants: {
    variant: {
      outline: "border-4 border-primary",
      filled: "bg-teal-600/20 border-none",
      striped: "bg-teal-600/20 border-none",
      "striped-filled": "bg-teal-600/20 border-none",
      "filled-primary": "bg-primary text-white hover:text-white border-none",
      "filled-white": "bg-white border-none",
    },
  },
  defaultVariants: {
    variant: "outline",
  },
});

type ListProps = {
  index?: number;
  keyword: string;
  description: string;
  variant?:
    | "outline"
    | "filled"
    | "striped"
    | "striped-filled"
    | "filled-primary"
    | "filled-white";
  showNumber?: boolean;
};

const ListDesktop = ({
  index = 0,
  keyword,
  description,
  variant,
  showNumber = false,
}: ListProps) => {
  const number = index.toString().padStart(2, "0");
  return (
    <div
      className={cn(
        listVariants({
          variant,
          className:
            "border-primary justify-start items-start gap-3 inline-flex py-3",
        })
      )}
    >
      {showNumber && (
        <div className="text-xl font-bold leading-loose">{number}</div>
      )}
      <div className="grow shrink basis-0 flex-col justify-center items-start gap-1 inline-flex">
        <div className="self-stretch text-base font-bold leading-loose">
          {keyword}
        </div>
        <div className="self-stretch text-sm font-normal">{description}</div>
      </div>
    </div>
  );
};

const ListMobile = ({
  index = 0,
  keyword,
  description,
  variant,
  showNumber = false,
}: ListProps) => (
  <AccordionItem
    value={index.toString()}
    className={cn(
      listVariants({
        variant,
        className: "py-2 rounded-3xl border-2",
      })
    )}
  >
    <AccordionTrigger className="inline-flex justify-between gap-3 text-sm font-bold">
      {showNumber && <span>{index.toString().padStart(2, "0")}</span>}
      <span className="w-full text-left">{keyword}</span>
    </AccordionTrigger>
    <AccordionContent className={`${showNumber && "mx-6"} mt-1`}>
      {description}
    </AccordionContent>
  </AccordionItem>
);

type Props = {
  data: ListProps[];
  variant?: "outline" | "filled" | "striped" | "striped-filled";
  showNumber?: boolean;
  listDesktopClassName?: string;
  listMobileClassName?: string;
};

const List = ({
  data,
  variant = "outline",
  showNumber = false,
  listDesktopClassName,
  listMobileClassName,
}: Props) => {
  const stripedStyle = (index: number) => {
    if (variant !== "striped" && variant !== "striped-filled") return variant;

    if (index % 2 !== 0) {
      return variant === "striped" ? "filled" : "filled-white";
    }
    return variant === "striped" ? "outline" : "filled-primary";
  };

  return (
    <>
      <div
        className={cn(
          "w-full hidden flex-col gap-2 md:flex",
          listDesktopClassName,
          listMobileClassName
        )}
      >
        {data.map((item, index) => (
          <ListDesktop
            key={index}
            variant={stripedStyle(index)}
            showNumber={showNumber}
            {...item}
          />
        ))}
      </div>
      <Accordion
        type="single"
        collapsible
        className={cn("flex md:hidden flex-col gap-2 w-full", listMobileClassName)}
      >
        {data.map((item, index) => (
          <ListMobile
            key={index}
            variant={stripedStyle(index)}
            showNumber={showNumber}
            {...item}
          />
        ))}
      </Accordion>
    </>
  );
};

export default List;
