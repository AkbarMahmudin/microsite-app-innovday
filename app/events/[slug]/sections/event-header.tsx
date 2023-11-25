import { YoutubeEmbed } from "@/components/custom/embed";
import { AspectRatio } from "@/components/ui/aspect-ratio";

type Props = {
  youtubeSrc: string;
};

const Header = ({ youtubeSrc }: Props) => {
  return (
    <section className="sticky top-16 shadow-md">
      <AspectRatio ratio={16 / 9}>
        <YoutubeEmbed
          src={youtubeSrc}
          title="Youtube Embed"
          className="min-w-full min-h-full"
        />
      </AspectRatio>
    </section>
  )
}

export default Header