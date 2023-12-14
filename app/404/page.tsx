"use client";

import React from "react";
import Link from "next/link";

// icon
import { Icon } from "@iconify/react/dist/iconify.js";

// hooks
import useCommand from "@/hooks/useCommand";

// components
import Maskot from "@/components/maskot";
import { Badge } from "@/components/custom/badge";
import { CommandDialog } from "@/components/custom/command";
import { Button, buttonVariants } from "@/components/ui/button";

const NotFound = () => {
  const { eventData, navData, open, setOpen, handleOpenChange, handleSearch } =
    useCommand();

  return (
    <section className="container min-w-full min-h-[calc(100vh-10rem)] grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-2 lg:gap-y-[50px] gap-y-10 justify-center items-center text-muted-foreground bg-[url('/background/404.webp')] bg-contain bg-no-repeat bg-center">
      <Maskot
        variant="smartphone"
        className="mx-auto p-4 md:w-full w-3/4 lg:row-span-2"
      />

      <article className="404__message flex flex-col gap-3 items-center self-end min-w-full">
        <Badge className="font-bold text-2xl md:text-3xl lg:text-6xl">
          404
        </Badge>
        <strong className="text-lg md:text-xl lg:text-3xl font-bold leading-tight text-center mt-4">
          Oops, kami tidak dapat menemukan apa yang kamu cari
        </strong>
      </article>

      <article className="404__cta flex flex-col gap-3 items-center self-start min-w-full">
        <p className="text-base md:text-lg lg:text-xl text-center">
          Apa yang ingin Sobat Innov temukan?
        </p>

        <Button
          variant="outline"
          className="w-full h-full bg-transparent border-input inline-flex justify-start"
          onClick={() => setOpen(true)}
          name="search"
        >
          <Icon
            icon="basil:search-outline"
            width="22"
            height="22"
            color="#909090"
            className="mr-2"
          />
          <div className="text-neutral-400 text-base font-normal">Search</div>
        </Button>

        <p className="text-base text-center">Atau</p>

        <Link
          href="/"
          className={buttonVariants({
            size: "lg",
            className: "w-full block",
          })}
          title="Kembali ke Halaman Utama"
        >
          Kembali ke Halaman Utama
        </Link>
      </article>

      <CommandDialog
        open={open}
        onOpenChange={handleOpenChange}
        eventData={eventData}
        navData={navData}
        onSearch={handleSearch}
      />
    </section>
  );
};

export default NotFound;
