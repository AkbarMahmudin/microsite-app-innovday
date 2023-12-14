import { Badge } from "@/components/custom/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Link from "next/link";
import React from "react";

type Props = {
  text: string;
  triggerClassName?: string;
  title: string;
  description: string;
  list?: string[];
};

const SpeakerTermCondition = ({
  text,
  triggerClassName,
  title,
  description,
  list,
}: Props) => {
  const listItems = list?.map((item, index) => <li key={index}>{item}</li>);

  const titleSplited = title.split(" ");
  const titleBadge = titleSplited.pop();
  const titleHeading = titleSplited.join(" ");

  return (
    <Dialog>
      <DialogTrigger className={triggerClassName}>{text}</DialogTrigger>
      <DialogContent className="gap-5">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-left">
            {titleHeading}
            <Badge className="font-bold text-2xl lg:ml-2">{titleBadge}</Badge>
          </DialogTitle>
        </DialogHeader>
        <DialogDescription className="md:text-base text-sm font-normal leading-normal text-black">
          <p>{description}</p>
          <ol className="list-decimal list-inside mt-2">{listItems}</ol>
        </DialogDescription>
        <DialogFooter className="text-sm">
          <p>
            Apabila Sobat Innov memiliki pertanyaan lebih lanjut silakan untuk
            menghubungi kami pada menu{" "}
            <Link
              href="/contact"
              target="_blank"
              className="text-primary underline"
              title="contact us"
            >
              Contact Us
            </Link>
            .
          </p>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default SpeakerTermCondition;
