"use client";

import { SlidoEmbed, YoutubeEmbed } from "@/components/custom/embed";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import useBreakpoint from "@/hooks/useBreakPoint";

type Props = {
  youtubeSrc: string;
  slidoSrc?: string;
};

const Header = ({ youtubeSrc, slidoSrc }: Props) => {
  const breakpoint = useBreakpoint();

  return (
    <section className="min-w-full z-40 sticky top-16 lg:static lg:container shadow-md lg:shadow-none lg:grid grid-cols-3 gap-4">
      <div className={`${slidoSrc ? 'col-span-2' : 'col-span-3'}`}>
        <AspectRatio ratio={16 / 9}>
          <YoutubeEmbed
            src={youtubeSrc}
            title="Youtube Embed"
            className="min-w-full min-h-full lg:rounded-md"
          />
        </AspectRatio>
      </div>

      {slidoSrc && (breakpoint === "lg" || breakpoint === "xl") && (
        <SlidoEmbed
          src={slidoSrc}
          title="Slido"
          className="rounded-md lg:h-full"
        />
      )}
    </section>
  )
}

export default Header