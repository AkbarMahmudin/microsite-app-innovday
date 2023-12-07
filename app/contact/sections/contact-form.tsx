"use client";

import React from "react";
import * as z from "zod";

// components
import { Badge } from "@/components/custom/badge";
import { Button } from "@/components/custom/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

// hooks
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/components/ui/use-toast";

const contactSchema = z.object({
  name: z.string().min(3, "Nama lengkap minimal 3 karakter").max(255),
  email: z.string().email("Email tidak valid"),
  subject: z.string().min(3, "Subjek minimal 3 karakter").max(255),
  message: z.string().min(10, "Pesan minimal 10 karakter").max(255),
});

const ContactField = ({
  label,
  name,
  placeholder,
  type = "text",
  description,
  control,
  children,
}: {
  label: string;
  name: string;
  placeholder: string;
  description?: string;
  type?: string;
  control: any;
  children?: React.ReactNode;
}) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field, fieldState }) => (
        <FormItem>
          <FormLabel htmlFor={name} className="text-sm md:text-base text-black">
            {label}
          </FormLabel>
          <FormControl>
            {React.cloneElement(children as React.ReactElement<any>, {
              ...field,
              id: name,
              placeholder,
              type,
              isValid: !fieldState.invalid,
            })}
          </FormControl>
          <FormDescription className="md:text-sm text-xs">
            {description}
          </FormDescription>
          <FormMessage className="md:text-sm text-xs" />
        </FormItem>
      )}
    />
  );
};

const ContactForm = () => {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const handleSend = async (values: z.infer<typeof contactSchema>) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));
      form.reset();
      toast({
        title: "Pesan terkirim",
        description: "Terima kasih telah menghubungi kami",
        variant: "success",
      });
      console.info("DATA", values);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className="container lg:px-0 lg:w-3/5 md:h-full relative lg:absolute lg:flex items-center -top-24 lg:-top-0 lg:right-0 mb-0">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSend)} className="w-full">
          <Card className="mx-6 lg:mx-0 lg:w-full rounded-3xl lg:py-10 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-bold">
                Contact{" "}
                <Badge size="large" className="font-bold ml-0.5">
                  Us
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <article className="flex flex-col gap-5 md:gap-7">
                <div className="flex flex-col gap-2">
                  <ContactField
                    label="Nama Lengkap"
                    name="name"
                    placeholder="Ketik nama lengkap Anda di sini"
                    control={form.control}
                  >
                    <Input className="placeholder:text-xs md:placeholder:text-sm" />
                  </ContactField>
                </div>
                <div className="flex flex-col gap-2">
                  <ContactField
                    label="Email"
                    name="email"
                    placeholder="innov@day.com"
                    control={form.control}
                  >
                    <Input
                      className="placeholder:text-xs md:placeholder:text-sm"
                      inputMode="email"
                    />
                  </ContactField>
                </div>
                <div className="flex flex-col gap-2">
                  <ContactField
                    label="Subjek"
                    name="subject"
                    placeholder="Kendala saat mendaftar menjadi speaker"
                    control={form.control}
                  >
                    <Input className="placeholder:text-xs md:placeholder:text-sm" />
                  </ContactField>
                </div>
                <div className="flex flex-col gap-2">
                  <ContactField
                    label="Pesan"
                    name="message"
                    placeholder="Sudah 3 hari semenjak pendaftaran tidak ada email pemberitahuan"
                    control={form.control}
                  >
                    <Textarea
                      className="placeholder:text-xs md:placeholder:text-sm"
                      id="message"
                    />
                  </ContactField>
                </div>
              </article>
            </CardContent>
            <CardFooter>
              <Button
                type="submit"
                className="w-full"
                disabled={form.formState.isSubmitting}
              >
                Kirim
              </Button>
            </CardFooter>
          </Card>
        </form>
      </Form>
    </section>
  );
};

export default ContactForm;
