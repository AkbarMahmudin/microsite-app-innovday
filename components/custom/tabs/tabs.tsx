import {
  Tabs as TabsUi,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import React from "react";

type Props = React.ComponentPropsWithoutRef<typeof TabsUi> & {
  data: {
    title: string;
    content: React.ReactNode | React.ReactNode[] | string;
  }[];
};

const CustomTabsList = ({ titles }: { titles: string[] }) => {
  return (
    <TabsList
      className={`grid w-full grid-cols-${titles.length ?? 2} bg-transparent mb-4`}
    >
      {titles.map((title, index) => (
        <TabsTrigger
          className="capitalize"
          key={index}
          value={title.toLocaleLowerCase()}
        >
          {title}
        </TabsTrigger>
      ))}
    </TabsList>
  );
};

const CustomTabsContent = ({ data }: Props) => {
  return data.map((item, index) => (
    <TabsContent key={index} value={item.title.toLocaleLowerCase()} className="text-sm font-normal">
      <p dangerouslySetInnerHTML={
        typeof item.content === "string"
          ? { __html: item.content }
          : undefined
      }></p>
    </TabsContent>
  ));
};

const Tabs = ({ data, ...props }: Props) => {
  const titles = data.map((item) => item.title);

  return (
    <TabsUi {...props}>
      <CustomTabsList titles={titles} />
      <CustomTabsContent data={data} />
    </TabsUi>
  );
};

export default Tabs;
