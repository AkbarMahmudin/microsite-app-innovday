import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";

// copywrite
import { home } from "@/_mock/copywriting";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import Maskot from "@/components/maskot";
import Image from "next/image";

const cp = home.content["regist-speaker"];

const renderCircle = () => (
  <Image
    src="/background/regist-speaker.webp"
    alt=""
    width={100}
    height={100}
    className="absolute -top-16 -left-8"
  />
);

const renderMaskot = () => (
  <div className="w-64 flex justify-center lg:w-2/5 lg:h-[500px] mx-auto lg:mx-0 absolute -top-28 lg:right-0 lg:bottom-0 lg:top-auto overflow-hidden">
    <Maskot
      variant="dslr"
      className="lg:w-auto lg:absolute lg:-bottom-16 lg:h-full"
    />
  </div>
);

const RegistSpeaker = () => {
  return (
    <section className="container flex flex-col min-w-full">
      <Card className="bg-gradient-to-br from-teal-500 to-primary text-center lg:text-left relative w-full mt-20 lg:mt-36 lg:p-10 flex flex-col items-center lg:items-start">
        {renderCircle()}
        
        {renderMaskot()}

        {/* MAIN CONTENT */}
        <CardHeader className="mt-32 lg:mt-0 lg:w-3/5">
          <CardTitle className="text-sm lg:text-lg font-bold">
            {cp.title}
          </CardTitle>
        </CardHeader>
        <CardContent className="lg:w-3/5">
          <p className="text-sm lg:text-lg font-normal lg:leading-7">
            {cp.description}
          </p>
        </CardContent>
        <CardFooter className="lg:w-3/5">
          <Link
            href={cp.cta.url}
            className={buttonVariants({
              className: "mx-auto lg:mx-0",
            })}
            title={cp.cta.label}
          >
            {cp.cta.label}
          </Link>
        </CardFooter>
      </Card>
    </section>
  );
};

export default RegistSpeaker;
