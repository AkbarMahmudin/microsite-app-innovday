"use client";
import { usePathname, useRouter } from "next/navigation";

// components
import { Breadcrumbs } from "@/components/custom/breadcrumbs";
import { Paginate } from "@/components/custom/pagination";
import { Description, EventList } from "../sections";
import { Toolbar } from "../sections";

// copywrite
import * as copywrite from "@/_mock/copywriting";

// utils
import kebabToCamel from "@/lib/kebab-to-camel";
import useQueryParams from "@/hooks/useQueryParams";
import EVENTS from "@/_mock/_events";

const EventView = ({ category }: { category: string }) => {
  const router = useRouter();
  const pathname = usePathname();
  const query = useQueryParams();

  const categoryFormated = kebabToCamel(category);

  const cp: {
    title: string;
    description: string;
    breadcrumbs?: {
      name: string;
      url?: string;
    }[];
    content?: {
      [key: string]: any;
    };
  } = copywrite[categoryFormated as keyof typeof copywrite];

  if (!cp) {
    router.push("/404");
    return null;
  }

  const { title, description, breadcrumbs } = cp;

  const events = EVENTS;

  const handleOnSearch = (value: string) => {
    value ? query.set("search", encodeURI(value)) : query.delete("search");

    router.replace(`${pathname}?${query.toString()}`);
  };

  const handleOnSort = (value: string) => {
    value ? query.set("sort", value) : query.delete("sort");

    router.replace(`${pathname}?${query.toString()}`);
  };

  const handleOnPageChange = ({ selected }: { selected: number }) => {
    const page = selected + 1;
    page !== 1 ? query.set("page", page.toString()) : query.delete("page");

    router.replace(`${pathname}?${query.toString()}`, {
      scroll: true,
    });
  };

  const handleOnFilter = (tags: string[], category: string) => {
    tags.length ? query.set("tags", tags.join(",")) : query.delete("tags");
    category ? query.set("category", category) : query.delete("category");

    router.replace(`${pathname}?${query.toString()}`);
  };

  return (
    <>
      <Breadcrumbs className="container" links={breadcrumbs || []} />
      <Description title={title} description={description} />
      <Toolbar
        onSearch={handleOnSearch}
        onSort={handleOnSort}
        onFilter={handleOnFilter}
      />
      <EventList events={events} />
      <Paginate
        page={0}
        pageCount={10}
        onPageChange={handleOnPageChange}
        perPage={5}
        className="scroll-smooth"
      />
    </>
  );
};

export default EventView;
