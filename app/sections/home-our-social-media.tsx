"use client";

import { Badge } from "@/components/custom/badge";
import React from "react";

// copywrite
import { home } from "@/_mock/copywriting";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import useBreakpoint from "@/hooks/useBreakPoint";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Mousewheel, Scrollbar } from "swiper/modules";
import Image from "next/image";

const cp = home.content["our-social-media"];

const Description = () => (
  <div className="flex flex-col gap-4 items-start justify-center w-full">
    <Badge size="small">{cp.tag}</Badge>
    <h2 className="text-2xl md:text-[32px] font-bold leading-[30px]">{cp.title}</h2>
    <p className="text-sm md:text-base font-normal">{cp.description}</p>
  </div>
);

const Instagram = () => {
  const breakpoint = useBreakpoint();

  return (
    <div className="flex flex-col gap-8 w-full mt-16">
      <div className="flex flex-row items-center gap-3 w-full">
        <Avatar className="w-16 h-16 bg-gradient-to-bl from-fuchsia-600 to-amber-500 p-1 mb-10">
          <AvatarImage
            src={cp.instagram.avatarUrl}
            alt={cp.instagram.name}
            className="bg-white rounded-full w-full object-contain"
          />
          <AvatarFallback>{cp.instagram.name.charAt(0)}</AvatarFallback>
        </Avatar>

        <div className="flex flex-col gap-0.5 items-start justify-center ml-2">
          <h3 className="text-sm md:text-2xl font-bold">{cp.instagram.username}</h3>
          <p className="text-xs md:text-base font-normal md:leading-normal">
            <strong className="text-xs md:text-base font-semibold block md:leading-normal">
              {cp.instagram.name}
            </strong>
            {cp.instagram.bio}
          </p>

          <Link
            href={cp.instagram.cta.url}
            className={buttonVariants({
              className: "text-sm font-semibold mt-4",
            })}
            target="_blank"
          >
            {cp.instagram.cta.label}
          </Link>
        </div>
      </div>

      {["sm", "xs"].includes(breakpoint) ? (
        <Swiper
          direction={"horizontal"}
          slidesPerView={"auto"}
          spaceBetween={10}
          freeMode={true}
          scrollbar={false}
          mousewheel={true}
          grabCursor={true}
          modules={[FreeMode, Scrollbar, Mousewheel]}
        >
          {cp.instagram.posts.map((post, index) => (
            <SwiperSlide key={index} style={{ height: "auto", width: "auto" }}>
              <Image src={post} alt={post} width={300} height={300} />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <div className="grid grid-cols-3 gap-8 w-full">
          {cp.instagram.posts.map((post, index) => (
            <Image key={index} src={post} alt={post} width={300} height={300} className="w-full" />
          ))}
        </div>
      )}
    </div>
  );
};

const Spotify = () => (
  <div className="flex flex-col gap-8 w-full mt-16">
    <div className="flex flex-row items-center gap-3 w-full">
      <Avatar className="w-16 h-16 mb-10">
        <AvatarImage
          src={cp.spotify.avatarUrl}
          alt={cp.spotify.name}
          className="bg-white rounded-full w-full object-contain"
        />
        <AvatarFallback>{cp.spotify.name.charAt(0)}</AvatarFallback>
      </Avatar>

      <div className="flex flex-col gap-1 items-start justify-center ml-2">
        <span className="text-sm md:text-base font-normal">{cp.spotify.label}</span>
        <h3 className="text-sm md:text-2xl font-bold">{cp.spotify.name}</h3>

        <Link
          href={cp.spotify.cta.url}
          className={buttonVariants({
            className: "text-sm font-semibold mt-4",
          })}
          target="_blank"
        >
          {cp.spotify.cta.label}
        </Link>
      </div>
    </div>

    <div
      dangerouslySetInnerHTML={{
        __html: cp.spotify.embed,
      }}
      className="w-full h-[480px] md:h-[232px]"
    ></div>
  </div>
);

const OurSocialMedia = () => {
  return (
    <section className="container flex flex-col items-start justify-center min-w-full">
      <Description />
      <Instagram />
      <Spotify />
    </section>
  );
};

export default OurSocialMedia;
