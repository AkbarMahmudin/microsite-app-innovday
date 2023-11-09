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
  variant?: "outline" | "filled" | "striped";
};

const ListDesktop = ({
  index = 0,
  keyword,
  description,
  variant,
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
      <div className="text-primary text-xl font-bold leading-loose">
        {number}
      </div>
      <div className="grow shrink basis-0 flex-col justify-center items-start gap-1 inline-flex">
        <div className="self-stretch text-primary text-base font-bold leading-loose">
          {keyword}
        </div>
        <div className="self-stretch text-primary text-sm font-normal">
          {description}
        </div>
      </div>
    </div>
  );
};

const ListMobile = ({
  index = 0,
  keyword,
  description,
  variant,
}: ListProps) => (
  <AccordionItem
    value={index.toString()}
    className={cn(
      listVariants({
        variant,
        className: "py-2 rounded-3xl border-2 text-primary",
      })
    )}
  >
    <AccordionTrigger className="inline-flex justify-between gap-3 text-sm font-bold">
      <span>{index.toString().padStart(2, "0")}</span>
      <span className="w-full text-left">{keyword}</span>
    </AccordionTrigger>
    <AccordionContent className="mx-6 mt-1">{description}</AccordionContent>
  </AccordionItem>
);

type Props = {
  data: ListProps[];
  variant?: "outline" | "filled" | "striped";
};

const List = ({ data, variant = "outline" }: Props) => {
  const stripedStyle = (index: number) => {
    if (variant !== "striped") return variant;

    if (index % 2 !== 0) {
      return "filled";
    }
    return "outline";
  };
  return (
    <>
      <div className="w-full hidden flex-col gap-2 md:flex">
        {data.map((item, index) => (
          <ListDesktop key={index} variant={stripedStyle(index)} {...item} />
        ))}
      </div>
      <Accordion
        type="single"
        collapsible
        className="flex md:hidden flex-col gap-2 w-full"
      >
        {data.map((item, index) => (
          <ListMobile key={index} variant={stripedStyle(index)} {...item} />
        ))}
      </Accordion>
    </>
  );
};

export default List;
