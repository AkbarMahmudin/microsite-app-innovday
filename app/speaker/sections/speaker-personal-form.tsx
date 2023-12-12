import React from "react";
import { z } from "zod";

// components
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { NextButton, TextField, SpeakerFormContainer } from "./components";

// hooks
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

type Props = {
  personalValues?: z.infer<typeof schema>;
  onSubmit: (prev: any) => void;
  onNext: () => void;
};

const schema = z.object({
  name: z.string().min(3, "Nama lengkap minimal 3 karakter").max(255),
  email: z.string().email("Email tidak valid"),
  noHp: z.string().min(10, "No Hp minimal 10 karakter").max(15),
  company: z.string().min(3, "Nama perusahaan minimal 3 karakter").max(255),
  address: z.string().min(10, "Alamat minimal 10 karakter").max(255),
});

const SpeakerPersonalForm = ({ personalValues, onSubmit, onNext }: Props) => {
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: personalValues,
  });

  const handleSubmit = (values: z.infer<typeof schema>) => {
    onSubmit((prev: any) => {
      prev.personal = values;
      return prev;
    });
    onNext();
  };

  return (
    <SpeakerFormContainer
      title="Formulir Identitas"
      form={form}
      onSubmit={handleSubmit}
    >
      <TextField
        control={form.control}
        name="name"
        label="Name"
        placeholder="Ketikkkan nama lengkap Anda di sini"
      >
        <Input
          value={personalValues?.name}
          className="placeholder:text-xs md:placeholder:text-sm"
        />
      </TextField>

      <TextField
        control={form.control}
        name="email"
        label="Email"
        placeholder="innov@day.com"
        type="email"
      >
        <Input
          inputMode="email"
          className="placeholder:text-xs md:placeholder:text-sm"
        />
      </TextField>

      <TextField
        control={form.control}
        name="noHp"
        label="No Hp"
        placeholder="08**********"
        type="tel"
      >
        <Input
          inputMode="tel"
          className="placeholder:text-xs md:placeholder:text-sm"
        />
      </TextField>

      <TextField
        control={form.control}
        name="company"
        label="Perusahaan/Institasi"
        placeholder="Telkom Indonesia"
      >
        <Input className="placeholder:text-xs md:placeholder:text-sm" />
      </TextField>

      <TextField
        control={form.control}
        name="address"
        label="Alamat Lengkap"
        placeholder="Jl. Setiabudi No. 25, Kecamatan Coblong, Kota Bandung, 4016"
        description="Alamat akan digunakan untuk keperluan pengiriman merchandise."
      >
        <Textarea className="placeholder:text-xs md:placeholder:text-sm" />
      </TextField>

      <NextButton className="mt-5" />
    </SpeakerFormContainer>
  );
};

export default SpeakerPersonalForm;
