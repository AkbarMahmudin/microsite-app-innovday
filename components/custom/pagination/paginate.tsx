"use client";

import { cn } from "@/lib/utils";
import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";

import ReactPaginate from "react-paginate";

type Props = {
  pageCount: number;
  page: number;
  perPage: number;
  className?: string;
  onPageChange: (event: any) => void;
};

const Paginate = ({
  pageCount,
  page,
  perPage,
  className,
  onPageChange,
}: Props) => {
  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel={<Icon icon="eva:chevron-right-outline" width={24} />}
      nextClassName="py-[5px] px-[14px]"
      onPageChange={onPageChange}
      initialPage={page}
      pageRangeDisplayed={perPage}
      pageCount={pageCount}
      previousLabel={<Icon icon="eva:chevron-left-outline" width={24} />}
      previousClassName="py-[5px] px-[14px]"
      pageClassName="py-[5px] px-[14px]"
      activeClassName="bg-primary text-white rounded-full p-0"
      disabledLinkClassName="cursor-not-allowed opacity-50"
      className={cn(
        "flex justify-center items-center gap-2 text-primary font-bold md:text-base text-sm w-full flex-wrap",
        className
      )}
    />
  );
};

export default Paginate;
