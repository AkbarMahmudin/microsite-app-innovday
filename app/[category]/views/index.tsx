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

// mock
import EVENTS from "@/_mock/_events";

const LIMIT = 9;

const EventView = ({ category: categoryEvent }: { category: string }) => {
  const router = useRouter();
  const pathname = usePathname();
  const query = useQueryParams();

  const categoryFormated = kebabToCamel(categoryEvent);

  const cp: any = copywrite[categoryFormated as keyof typeof copywrite];

  if (!cp) {
    return router.push("/404");
  }

  const { title, description, breadcrumbs } = cp;

  const events = EVENTS;

  const pageNumber = Number(query.get("page")) || 1;
  const search = query.get("search") || "";
  const sort = query.get("sort") || "latest";
  const category = query.get("category") || "";
  const tags = query.get("tags")?.split(",") || [];

  const displayData = applyFilter(
    events,
    pageNumber,
    search,
    sort,
    category,
    tags
  );

  const handleOnSearch = (value: string) => {
    value ? query.set("search", encodeURI(value)) : query.delete("search");

    query.delete("page");

    router.replace(`${pathname}?${query.toString()}`);
  };

  const handleOnSort = (value: string) => {
    value ? query.set("sort", value) : query.delete("sort");

    query.delete("page");

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
    category
      ? query.set("category", encodeURI(category))
      : query.delete("category");

    query.delete("page");

    router.replace(`${pathname}?${query.toString()}`);
  };

  const handleResetFilter = () => {
    query.delete("tags");
    query.delete("category");

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
        onResetFilter={handleResetFilter}
        currentCategory={category}
        currentTags={tags}
        showCategory={pathname === "/events"}
      />
      <EventList events={displayData} />

      {displayData.length > 0 && (
        <Paginate
          page={0}
          pageCount={Math.ceil(events.length / LIMIT)}
          onPageChange={handleOnPageChange}
          perPage={LIMIT}
          className="scroll-smooth"
        />
      )}
    </>
  );
};

// Filtering data events
const applyFilter = (
  events: any[],
  pageNumber: number = 1,
  search?: string,
  sort?: string,
  category?: string,
  tags?: string[]
) => {
  const start = (pageNumber - 1) * LIMIT;
  const end = start + LIMIT;

  let filteredEvents = events;

  if (search) {
    const regex = new RegExp(search, "i");
    filteredEvents = filteredEvents.filter((event) => regex.test(event.title));
  }

  if (sort) {
    filteredEvents = filteredEvents.sort((a, b) => {
      if (sort === "latest") {
        return (
          new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
        );
      } else {
        return (
          new Date(a.publishedAt).getTime() - new Date(b.publishedAt).getTime()
        );
      }
    });
  }

  if (category) {
    filteredEvents = filteredEvents.filter(
      (event) => event.category === decodeURI(category)
    );
  }

  if (tags) {
    filteredEvents = filteredEvents.filter((event) => {
      return tags.every((tag) => event.tags.includes(tag));
    });
  }

  return filteredEvents.slice(start, end);
};

export default EventView;
