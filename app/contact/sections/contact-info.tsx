"use client";

import Maskot from "@/components/maskot";
import { Card } from "@/components/ui/card";

import { CONTACTS, SOCIAL_MEDIA } from "@/_mock";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";
import { Button } from "@/components/custom/button";

const renderContactList = () => {
  return (
    <ul className="self-stretch flex-col justify-start items-center gap-4 flex text-xs md:text-base xl:text-lg font-normal">
      {CONTACTS.map((item, index) => (
        <li
          key={index}
          className="self-stretch justify-start items-center gap-3 inline-flex"
        >
          <Icon icon={item.icon} className="lg:w-6" />
          <Link href={item.link || "#"} title={item.text}>
            {item.text}
          </Link>
        </li>
      ))}
    </ul>
  );
};

const renderSocialMediaList = () => {
  return (
    <div className="justify-start items-center gap-[10.65px] inline-flex">
      {SOCIAL_MEDIA.map((item, index) => (
        <Button
          variant="secondary"
          size="icon"
          className="rounded-full"
          key={index}
          name="social-media"
        >
          <Link href={item.path} title="Follow our social media">
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
  );
};

const ContactInfo = () => {
  return (
    <aside className="container lg:px-0 lg:w-1/2">
      <Card className="pt-6 pb-20 px-8 lg:py-28 lg:pl-[50px] lg:pr-[100px] bg-primary flex flex-col items-center gap-8 text-white rounded-3xl">
        <Maskot variant="smartphone" className="w-64 lg:w-[420px]" />
        {renderContactList()}
        {renderSocialMediaList()}
      </Card>
    </aside>
  );
};

export default ContactInfo;
