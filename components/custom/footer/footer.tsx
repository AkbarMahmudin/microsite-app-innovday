"use client";

import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../../ui/button";

type ContactInfoProps = {
  contact: { icon: string; text: string; link?: string }[];
};

const ContactInfo = ({ contact }: ContactInfoProps) => (
  <div className="self-stretch flex-col justify-start md:items-start items-center gap-10 flex font-normal text-sm">
    <Image
      src="/logo/innovday_full-white.png"
      alt="Innovation Day Logo"
      width={300}
      height={300}
    />

    <ul className="self-stretch flex-col justify-start items-center gap-5 flex">
      {contact.map((item, index) => (
        <li
          key={index}
          className="self-stretch justify-start items-start gap-3 inline-flex"
        >
          <Icon icon={item.icon} width={18} height={18} />
          <Link href={item.link || '#'}>
            {item.text}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

type NavigationProps = {
  menu: { title: string; path: string }[];
  ourProgram: { title: string; path: string }[];
};

const Navigation = ({ menu, ourProgram }: NavigationProps) => (
  <div className="self-stretch justify-between items-start inline-flex gap-10">
    <div className="flex-col justify-center items-start gap-4 inline-flex">
      <h3 className="text-white text-base font-bold leading-tight">Menu</h3>
      <ul className="flex-col justify-center items-start gap-3 flex">
        {menu.map((item, index) => (
          <li key={index} className="text-white text-sm font-normal">
            <Link href={item.path}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </div>

    <div className="flex-col justify-center items-start gap-4 inline-flex">
      <h3 className="text-white text-base font-bold leading-tight">
        Our Program
      </h3>
      <ul className="flex-col justify-center items-start gap-3 flex">
        {ourProgram.map((item, index) => (
          <li key={index} className="text-white text-sm font-normal">
            <Link href={item.path}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

type SocialMediaProps = {
  account: { icon: string; path: string }[];
};

const SocialMedia = ({ account }: SocialMediaProps) => (
  <div className="flex-col justify-center items-start gap-4 flex">
    <h3 className="text-white text-base font-bold leading-tight md:text-left text-center w-full">
      Follow Our Social Media
    </h3>
    <div className="justify-start items-center gap-[10.65px] inline-flex">
      {account.map((item, index) => (
        <Button
          variant="secondary"
          size="icon"
          className="rounded-full"
          key={index}
        >
          <Link href={item.path}>
            <Icon
              icon={item.icon}
              width={24}
              height={24}
              className="text-primary"
            />
          </Link>
        </Button>
      ))}
    </div>
  </div>
);

type Props = {
  navData: NavigationProps;
  contact: { icon: string; text: string }[];
  social: { icon: string; path: string }[];
};

function Footer({ navData, contact, social }: Props) {
  const { menu, ourProgram } = navData;

  return (
    <footer className="w-full flex-col justify-center items-center gap-[30px] inline-flex bg-primary md:pt-16 md:pb-8 py-8 md:px-32 px-4 text-white">
      <div className="w-full md:px-0 px-5 md:flex-row flex-col md:justify-between justify-center md:items-start items-center gap-[50px] inline-flex">
        <ContactInfo contact={contact} />

        <Navigation menu={menu} ourProgram={ourProgram as any} />

        <SocialMedia account={social} />
      </div>

      <hr className="border w-full my-7 md:mt-4 md:mb-1" />

      <div className="w-full flex-col justify-center items-center gap-4 inline-flex">
        <p className="text-white text-sm font-normal text-center">
          © Copyright by Innovation Day 2023 | Powered by Telkom Indonesia
        </p>
      </div>
    </footer>
  );
}

export default Footer;
