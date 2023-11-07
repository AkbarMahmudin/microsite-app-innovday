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
    content: React.ReactNode;
  }[];
};

const CustomTabsList = ({ titles }: { titles: string[] }) => {
  return (
    <TabsList
      className={`grid w-full grid-cols-${titles.length ?? 2} bg-transparent`}
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
    <TabsContent key={index} value={item.title.toLocaleLowerCase()}>
      {item.content}
    </TabsContent>
  ));
};

const Tabs = ({ data, ...props }: Props) => {
  const titles = data.map((item) => item.title);

  return (
    <TabsUi defaultValue="security" {...props}>
      <CustomTabsList titles={titles} />
      <CustomTabsContent data={data} />
    </TabsUi>
  );
};

export default Tabs;
