import { Breadcrumbs } from "@/components/custom/breadcrumbs";
import { YoutubeEmbed } from "@/components/custom/embed";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import React from "react";
import { Content, DetailInformation, Header } from "../sections";

type Props = {
  event: any;
};

const DetailEventView = ({ event }: Props) => {
  const {
    title,
    content,
    publishedAt,
    youtubeId: youtubeSrc,
    slidoId: slidoSrc,
    startDate,
    endDate,
    speaker,
    moderator,
    tags,
  } = event;

  console.log(event);

  return (
    <>
      <Breadcrumbs
        links={[
          {
            name: "Home",
            url: "/",
          },
          {
            name: "...",
          },
          {
            name: "Event Name",
            url: "/events/event-name",
          },
        ]}
        className="px-2 pt-4"
      />
      <Header youtubeSrc={youtubeSrc} />
      <Content
        title={title}
        content={content}
        publishedAt={publishedAt}
        slidoSrc={slidoSrc}
      />
      <DetailInformation
        startDate={startDate}
        endDate={endDate}
        speaker={speaker}
        moderator={moderator}
        tags={tags}
      />
    </>
  );
};

export default DetailEventView;
