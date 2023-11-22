import { Breadcrumbs } from "@/components/custom/breadcrumbs";

import { event } from "@/_mock/copywriting";
import { Badge } from "@/components/custom/badge";
import Toolbar from "./event-toolbar";

const cp = event;

const Description = () => {
  const title = cp.title.split(" ");

  return (
    <section className="container min-w-full flex flex-col gap-7 mt-10">
      <Breadcrumbs links={cp.breadcrumbs} />

      <h2 className="text-2xl font-bold leading-[30px]">
        {title[0]}
        <Badge className="ml-2 text-2xl font-bold leading-[30px]">{title[1]}</Badge>
      </h2>

      <p className="text-sm md:text-base font-normal md:leading-normal">{cp.description}</p>

      <Toolbar />
    </section>
  );
};

export default Description;
