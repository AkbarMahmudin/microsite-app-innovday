"use client";

import React from "react";
import { Badge } from ".";
import { Icon } from "@iconify/react/dist/iconify.js";

type Props = {
  text: string;
  onClose?: () => void;
};

const Tag = ({ text, onClose }: Props) => {
  return (
    <Badge size="small" className={`rounded-md ${onClose && 'gap-0 items-center'}`}>
      #{text}
      {onClose ? (
        <Icon
          icon="majesticons:close"
          className="w-6 h-6 ml-1 cursor-pointer"
          onClick={onClose}
        />
      ) : null}
    </Badge>
  );
};

export default Tag;
