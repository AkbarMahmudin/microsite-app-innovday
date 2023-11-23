import { Badge } from "@/components/custom/badge";
import Toolbar from "./event-toolbar";

type Props = {
  title: string;
  description: string;
};

const Description = ({ title, description }: Props) => {
  const titleSplited = title.split(" ");

  return (
    <section className="container min-w-full flex flex-col gap-7">
      <h2 className="text-2xl font-bold leading-[30px]">
        {titleSplited[0]}
        <Badge className="ml-2 text-2xl font-bold leading-[30px]">
          {titleSplited[1]}
        </Badge>
      </h2>

      <p className="text-sm md:text-base font-normal md:leading-normal">
        {description}
      </p>

      <Toolbar />
    </section>
  );
};

export default Description;
