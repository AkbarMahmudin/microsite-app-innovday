import { Badge } from "@/components/custom/badge";
import FAQContent from "./faq-content";

type Props = {
  tag: string;
  title: string;
  description: string;
  items: {
    question: string;
    answer: string;
  }[];
};

const FAQList = ({ tag, title, items }: Props) => {
  const listItems = {
    variant: "filled",
    data: items.map((item, index) => ({
      keyword: item.question,
      description: item.answer,
      index,
    })),
  };

  return (
    <section className="container min-w-full gap-7 flex flex-col">
      <div className="faq__header flex flex-col gap-3 justify-start items-start lg:col-span-2">
        <Badge size="small">{tag}</Badge>
        <h2 className="text-2xl font-bold">{title}</h2>
      </div>

      <FAQContent data={listItems.data} />
    </section>
  );
};

export default FAQList;
