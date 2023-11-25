import { isUrl } from "@/lib/valid-url";
import React from "react";

type Props = {
  src: string; // slido id OR slido url
  title: string;
  className?: string;
};

const SlidoEmbed = ({ src, title, className }: Props) => {
  const url = isUrl(src) ? src : `https://app.sli.do/event/${src}`;

  return (
    <>
      <iframe
        src={url}
        height="100%"
        width="100%"
        frameBorder="0"
        style={{
          maxHeight: "calc(100vh - 80px)",
        }}
        title={title}
        className={className}
      ></iframe>
    </>
  );
};

export default SlidoEmbed;
