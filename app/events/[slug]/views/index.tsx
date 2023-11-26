import { Breadcrumbs } from "@/components/custom/breadcrumbs";
import { Content, DetailInformation, Header } from "../sections";

type Props = {
  event: any;
};

const DetailEventView = ({ event }: Props) => {
  const {
    id,
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
            name: title,
            url: `/events/${id}`,
          },
        ]}
        className="px-2 pt-4 md:container"
      />
      <Header youtubeSrc={youtubeSrc} slidoSrc={slidoSrc} />

      <div className="lg:container lg:grid grid-cols-3 gap-4 min-w-full">
        <Content
          title={title}
          content={content}
          publishedAt={publishedAt}
          slidoSrc={slidoSrc}
          className="col-span-2"
        />

        <DetailInformation
          startDate={startDate}
          endDate={endDate}
          speaker={speaker}
          moderator={moderator}
          tags={tags}
        />
      </div>
    </>
  );
};

export default DetailEventView;
