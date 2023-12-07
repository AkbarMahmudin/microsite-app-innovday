"use client";

import React from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";

// components
import Maskot from "@/components/maskot";
import { Badge } from "@/components/custom/badge";
import { Button } from "@/components/custom/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

// hooks
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";
import { Icon } from "@iconify/react/dist/iconify.js";

type Props = {
  title: string;
  description: string;
};

const codeSchema = z.object({
  code: z.string().min(6).max(8),
});

const EventCodeForm = ({ title, description }: Props) => {
  const { toast } = useToast();
  const router = useRouter();
  const titleSplited = title.split(" ");

  const form = useForm<z.infer<typeof codeSchema>>({
    resolver: zodResolver(codeSchema),
    defaultValues: {
      code: "",
    },
  });

  const handleSubmit = form.handleSubmit(async (values) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));

      if (values.code !== "123456") {
        throw new Error("Kode event tidak ditemukan");
      }
      
      form.reset();
      console.info("DATA", values);
      return router.push("/events/8")
    } catch (error) {
      toast({
        title: "Gagal",
        description: typeof error === "string" ? error : "Terjadi kesalahan",
        variant: "destructive",
        icon: <Icon icon="mdi:alert-circle-outline" width={28} />,
      })
      console.error(error);
    }
  });

  return (
    <section className="container min-w-full grid grid-col-1 md:grid-cols-3 gap-10 lg:min-h-[76vh] min-h-[40vh] justify-center items-center bg-[url('/background/internal.png')] bg-cover bg-center bg-no-repeat">
      <Maskot variant="laptop" className="w-full" />

      <article className="internal__content flex flex-col gap-5 md:gap-8 md:col-span-2 md:justify-center lg:p-[133px]">
        <h2 className="text-2xl md:text-[32px] font-bold leading-[30px]">
          {titleSplited[0]}
          <Badge className="ml-2 text-2xl md:text-[32px] font-bold leading-[30px]">
            {titleSplited[1]}
          </Badge>
        </h2>

        <div className="flex flex-col gap-5 md:gap-3">
          <p className="text-sm md:text-base font-normal md:leading-normal">
            {description}
          </p>

          <Form {...form}>
            <form onSubmit={handleSubmit} className="flex flex-col gap-5 md:gap-8">
              <FormField
                control={form.control}
                name="code"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="Masukkan kode event"
                        className="text-sm md:text-base placeholder:text-sm md:placeholder-base bg-background"
                      />
                    </FormControl>
                    <FormMessage className="md:text-sm text-xs" />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                className="w-full"
                disabled={form.formState.isSubmitting}
              >
                Submit
              </Button>
            </form>
          </Form>
        </div>

      </article>
    </section>
  );
};

export default EventCodeForm;
