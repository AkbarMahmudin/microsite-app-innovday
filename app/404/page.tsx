import Maskot from "@/components/maskot";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <section className="container min-w-full min-h-[calc(100vh-10rem)] flex flex-col justify-center items-center text-muted-foreground">
      <Maskot variant="not-found" className="mx-auto md:w-1/4 w-full" />
      <h1 className="text-4xl font-bold mt-4">Ups!</h1>
      <p className="text-base text-center mt-3">
        Halaman yang kamu cari tidak ditemukan
      </p>

      <Link href="/" className={buttonVariants({
        size: "lg",
        className: "mt-8",
      })}>
        Kembali ke Beranda
      </Link>
    </section>
  );
};

export default NotFound;
