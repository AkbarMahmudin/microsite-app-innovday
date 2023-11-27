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
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import React from "react";

const ContactForm = () => {
  return (
    <section className="container md:px-0 md:w-3/5 md:h-full relative md:absolute md:flex items-center -top-28 md:-top-0 md:right-0 mb-0">
      <Card className="mx-6 md:mx-0 md:w-full rounded-3xl md:py-10 shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">
            Contact {" "}
            <Badge size="large" className="font-bold ml-0.5">Us</Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form className="flex flex-col gap-5 md:gap-7">
            <div className="flex flex-col gap-2">
              <Label htmlFor="name" className="text-sm md:text-base">Nama Lengkap</Label>
              <Input
                id="name"
                placeholder="Ketik nama lengkap Anda di sini"
                className="placeholder:text-xs md:placeholder:text-sm"
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="email" className="text-sm md:text-base">Email</Label>
              <Input
                id="email"
                placeholder="Ex: innovationday@gmail.com"
                className="placeholder:text-xs md:placeholder:text-sm"
                inputMode="email"
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="subject" className="text-sm md:text-base">Subjek</Label>
              <Input
                id="subject"
                placeholder="Ex: Kendala saat mendaftar menjadi speaker"
                className="placeholder:text-xs md:placeholder:text-sm"
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="message" className="text-sm md:text-base">Pesan</Label>
              <Textarea
                id="message"
                placeholder="Ex: Sudah 3 hari semenjak pendaftaran tidak ada email pemberitahuan"
                className="placeholder:text-xs md:placeholder:text-sm"
              />
            </div>
          </form>
        </CardContent>
        <CardFooter>
          <Button className="w-full">Kirim</Button>
        </CardFooter>
      </Card>
    </section>
  );
};

export default ContactForm;
