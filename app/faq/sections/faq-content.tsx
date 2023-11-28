"use client";

import { List } from "@/components/custom/list";
import useBreakpoint from "@/hooks/useBreakPoint";

const ListItem = ({ keyword, description, variant }: any) => (
  <div
    className={`${
      variant === "green" ? "bg-primary text-white" : "bg-white text-primary"
    } p-5 rounded-xl flex flex-col gap-3 min-h-[260px]`}
  >
    <h3 className="self-stretch text-xl font-bold">{keyword}</h3>
    <p className="self-stretch text-base font-normal leading-normal">
      {description}
    </p>
  </div>
);

const FAQDesktop = ({ data }: { data: any[] }) => {
  const result = [];

  let currentColor = "green";

  for (let iterator in data) {
    if (Number(iterator) === 0) {
      result.push(<ListItem variant={currentColor} {...data[iterator]} />);
      continue;
    }

    if (Number(iterator) % 2 === 0) {
      currentColor = currentColor === "green" ? "green" : "white";
    } else {
      currentColor = currentColor === "green" ? "white" : "green";
    }

    result.push(<ListItem variant={currentColor} {...data[iterator]} />);
  }

  return result;
};

const FAQContent = ({ data }: { data: any[] }) => {
  const breakpoint = useBreakpoint();

  return ["xs", "sm", "md"].includes(breakpoint) ? (
    <List data={data} variant="striped-filled" />
  ) : (
    <div className="grid grid-cols-2 gap-8">
      <FAQDesktop data={data} />
    </div>
  );
};

export default FAQContent;
