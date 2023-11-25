"use client";

import { Tag } from "@/components/custom/badge";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";

const ListItem = ({ icon, title, value }: any) => (
  <li className="flex gap-2 items-start">
    <Icon icon={icon} width={28} className="text-primary" />
    <div className="flex-1">
      <span className="block text-[11px] md:text-sm font-normal text-gray-500">
        {title}
      </span>
      <span className="block text-xs md:text-base font-normal">{value}</span>
    </div>
  </li>
);

const TagItems = ({ tags }: any) => (
  <div className="flex gap-2 flex-wrap">
    {tags.map((tag: string, index: number) => (
      <Link key={index} href="#">
        <Tag text={tag} />
      </Link>
    ))}
  </div>
);

const FeedBack = () => (
  <div className="flex flex-col gap-4">
    <Link href="/feedback" className={buttonVariants({})}>
      <Icon icon="fluent:chat-12-filled" className="w-6 h-6 mr-3" />
      Berikan Feedback
    </Link>
    <div className="grid grid-cols-2 gap-3">
      <Link href="/faq" className={buttonVariants({
        variant: "outline",
      })}>
        <Icon icon="ri:question-fill" className="w-6 h-6 mr-3" />
        FAQ
      </Link>
      <Link href="/contact-us" className={buttonVariants({
        variant: "outline",
      })}>
        <Icon icon="material-symbols-light:contact-mail" className="w-7 h-7 mr-3" />
        Contac Us
      </Link>
    </div>
  </div>
);

type Props = {
  startDate: string;
  endDate: string;
  speaker: string;
  moderator: string;
  tags: string[];
};

const DetailInformation = ({
  startDate,
  endDate,
  speaker,
  moderator,
  tags,
}: Props) => {
  return (
    <aside className="lg:px-0 container flex flex-col gap-4">
      <Separator />

      <h3 className="text-base font-bold leading-tight">Detail Informasi</h3>

      <ul className="flex flex-col gap-4">
        <ListItem
          icon="solar:calendar-date-bold"
          title="Tanggal"
          value={new Date(startDate).toLocaleDateString("id-ID", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        />
        <ListItem
          icon="mingcute:time-fill"
          title="Waktu"
          value={`${new Date(startDate).toLocaleTimeString("id-ID", {
            hour: "2-digit",
            minute: "2-digit",
          })} - ${new Date(endDate).toLocaleTimeString("id-ID", {
            hour: "2-digit",
            minute: "2-digit",
          })}`}
        />
        <ListItem icon="solar:user-bold" title="Speaker" value={speaker} />
        <ListItem icon="solar:user-bold" title="Moderator" value={moderator} />
      </ul>

      <Separator />

      <TagItems tags={tags} />
    
      <Separator />

      <FeedBack />
    </aside>
  );
};

export default DetailInformation;
