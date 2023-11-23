"use client";
import { useRouter } from "next/navigation";

// components
import { Breadcrumbs } from "@/components/custom/breadcrumbs";
import { Description, EventList } from "../sections";

// copywrite
import * as copywrite from "@/_mock/copywriting";

// utils
import kebabToCamel from "@/lib/kebab-to-camel";

const EventView = ({ category }: { category: string }) => {
  const router = useRouter();

  const categoryFormated = kebabToCamel(category);

  const cp: {
    title: string;
    description: string;
    breadcrumbs?: {
      name: string;
      url?: string;
    }[];
    content: {
      [key: string]: any;
    };
  } = copywrite[categoryFormated as keyof typeof copywrite];

  if (!cp) {
    router.push("/404");
    return null;
  }

  const { title, description, breadcrumbs, content } = cp;

  const events = content[category];

  return (
    <>
      <Breadcrumbs className="container" links={breadcrumbs || []} />
      <Description title={title} description={description} />
      <EventList events={events} />
    </>
  );
};

export default EventView;
