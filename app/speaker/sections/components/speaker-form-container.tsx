import { Badge } from "@/components/custom/badge";
import { Form } from "@/components/ui/form";
import React from "react";
import { z } from "zod";

type Props = {
  title: string;
  // shcema: object;
  form: z.infer<any>;
  children: React.ReactNode;
  onSubmit: (values: z.infer<any>) => void;
};

const SpeakeFormContainer = ({ title, children, form, onSubmit }: Props) => {
  const titleSplited = title.split(" ").map((titleItem, index) => {
    if (index === 0) {
      return titleItem;
    }
    return (
      <Badge key={index} className="font-bold text-2xl ml-2">
        {titleItem}
      </Badge>
    );
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full flex flex-col gap-5">
        <h2 className="text-2xl font-bold">{titleSplited}</h2>
        {children}
      </form>
    </Form>
  );
};

export default SpeakeFormContainer;
