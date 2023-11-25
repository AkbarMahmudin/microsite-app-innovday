import {
  Tabs as TabsUi,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import React from "react";

type CustomTabsListProps = {
  titles: string[];
  onChangeTab: (e: string) => void;
};

const CustomTabsList = ({ titles, onChangeTab }: CustomTabsListProps) => {
  const handleChangeTab = (e: React.MouseEvent<HTMLButtonElement>) => {
    const value: string = (e.target as HTMLButtonElement).textContent as string;
    onChangeTab(value.toLocaleLowerCase());
  }

  return (
    <TabsList
      className={`grid w-full grid-cols-${
        titles.length ?? 2
      } bg-transparent mb-4 md:text-2xl`}
    >
      {titles.map((title, index) => (
        <TabsTrigger
          className="capitalize"
          key={index}
          value={title.toLocaleLowerCase()}
          onClick={handleChangeTab}
        >
          {title}
        </TabsTrigger>
      ))}
    </TabsList>
  );
};

const CustomTabsContent = ({ data }: Props) => {
  return data.map((item, index) => (
    <TabsContent
      key={index}
      value={item.title.toLocaleLowerCase()}
      className="text-sm md:text-base font-normal"
    >
      {typeof item.content !== "string" ? item.content : (
          <div
            dangerouslySetInnerHTML={
              typeof item.content === "string"
                ? { __html: item.content }
                : undefined
            }
          ></div>
      )}
    </TabsContent>
  ));
};

type Props = React.ComponentPropsWithoutRef<typeof TabsUi> & {
  data: {
    title: string;
    content: React.ReactNode | React.ReactNode[] | string;
  }[];
  onChangeTab?: (e: string) => void;
};

const Tabs = ({ data, onChangeTab = () => {}, ...props }: Props) => {
  const titles = data.map((item) => item.title);

  return (
    <TabsUi {...props}>
      <CustomTabsList onChangeTab={onChangeTab} titles={titles} />
      <CustomTabsContent data={data} />
    </TabsUi>
  );
};

export default Tabs;
