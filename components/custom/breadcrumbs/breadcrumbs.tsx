"use client";

import { Icon } from "@iconify/react/dist/iconify.js";
import { ChevronRight } from "lucide-react";
import React from "react";
import { LinkItem } from ".";

const Separator = ({ index }: { index: number }) => {
  return index !== 0 ? (
    <ChevronRight className="inline-flex w-6 h-6 text-neutral-300" />
  ) : null;
};

type Props = {
  links: {
    name: string;
    url?: string;
  }[];
};

const Breadcrumbs = ({ links }: Props) => {
  const linkIcons = {
    home: "jam:home",
  } as any;

  return (
    <div className="flex flex-row justify-start items-center md:gap-1 gap-0.5 font-medium md:text-sm text-xs">
      {links.map((link, index) => (
        <span
          key={index}
          className="flex flex-row md:gap-1 gap-0.5 justify-start items-center"
        >
          <Separator index={index} />
          <LinkItem href={link.url} activeLast={index === links.length - 1}>
            {linkIcons[link.name.toLowerCase()] ? (
              <Icon
                icon={linkIcons[link.name.toLowerCase()]}
                className="h-[21px] w-[21px]"
              />
            ) : (
              link.name
            )}
          </LinkItem>
        </span>
      ))}
    </div>
  );
};

export default Breadcrumbs;
