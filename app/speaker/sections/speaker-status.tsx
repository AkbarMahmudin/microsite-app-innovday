import { Badge } from "@/components/custom/badge";
import Maskot from "@/components/maskot";
import React from "react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

type Props = {
  title: string;
  status: string;
  description: string;
  onPrev?: () => void;
};

const SpeakerStatus = ({ title, status, description, onPrev }: Props) => {
  const titleSplited = title.split(" ");
  const titleHeading = titleSplited.shift();
  const titleBadge = titleSplited.join(" ");

  return (
    <section className="container lg:p-0 min-w-full flex flex-col gap-5">
      <h2 className="text-2xl font-bold">
        {titleHeading}{" "}
        <Badge className="font-bold text-2xl">{titleBadge}</Badge>
      </h2>
      <Maskot variant="laptop" className="w-[237px] mx-auto" />
      <article className="text-base lg:text-lg text-center">
        <strong className="font-bold leading-loose">{status}</strong>
        <p className="font-normal text-sm lg:text-base leading-normal">{description}</p>
      </article>
      <div className="cta grid grid-cols-1 gap-y-5">
        <p className="text-sm md:text-base text-center">Silakan hubungi kami untuk pertanyaan lebih lanjut </p>
        <Link href="/contact" className={buttonVariants()}>
          Contact Us
        </Link>
      </div>
    </section>
  );
};

export default SpeakerStatus;
