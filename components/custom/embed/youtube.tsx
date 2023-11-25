import { isUrl } from "@/lib/valid-url";
import React from "react";

type Props = {
  src: string; // youtube id OR youtube url
  title: string;
  className?: string;
};

const YoutubeEmbed = ({ src, title, className }: Props) => {
  const url = isUrl(src) ? src : `https://www.youtube.com/embed/${src}`;

  return (
    <>
      <iframe
        src={url}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className={className}
      ></iframe>
    </>
  );
};

export default YoutubeEmbed;
