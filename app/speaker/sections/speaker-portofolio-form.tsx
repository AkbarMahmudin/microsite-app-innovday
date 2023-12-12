import React from "react";
import { z } from "zod";

// components
import { Input } from "@/components/ui/input";
import {
  NextButton,
  PrevButton,
  TextField,
  SpeakerFormContainer,
} from "./components";

// hooks
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

type Props = {
  socialMediaValues?: z.infer<typeof schema>;
  onSubmit: (prev: any) => void;
  onNext: () => void;
  onPrev: () => void;
};

const schema = z.object({
  portofolio: z.string().url(),
  linkedin: z.string().url(),
  instagram: z.string().optional(),
  tiktok: z.string().optional(),
});

const SpeakerPortofolioForm = ({
  socialMediaValues,
  onNext,
  onPrev,
  onSubmit,
}: Props) => {
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: socialMediaValues,
  });

  const handleSubmit = (values: z.infer<typeof schema>) => {
    onSubmit((prev: any) => {
      prev.socialMedia = values;
      return prev;
    });

    onNext();
  };

  return (
    <SpeakerFormContainer
      title="Lengkapi Portofolio"
      form={form}
      onSubmit={handleSubmit}
    >
      <TextField
        control={form.control}
        name="portofolio"
        label="Portofolio terbaru"
        placeholder="https://www.myportofolio.com"
        description="Anda dapat menyimpan file portofolio pada layanan penyimpanan seperti Google Drive, Dropbox, dll. Jangan lupa untuk membuka akses menjadi publik."
      >
        <Input
          className="placeholder:text-xs md:placeholder:text-sm"
          inputMode="url"
        />
      </TextField>

      <TextField
        control={form.control}
        name="linkedin"
        label="LinkedIn"
        placeholder="https://www.linkedin.com/in/mylinkedin"
      >
        <Input
          className="placeholder:text-xs md:placeholder:text-sm"
          inputMode="url"
        />
      </TextField>

      <TextField
        control={form.control}
        name="instagram"
        label={
          <span>
            Instagram
            <span className="ml-2 text-gray-400">
              (Optional)
            </span>
          </span>
        }
        placeholder="https://www.instagram.com/myinstagram"
      >
        <Input
          className="placeholder:text-xs md:placeholder:text-sm"
          inputMode="url"
        />
      </TextField>

      <TextField
        control={form.control}
        name="tiktok"
        label={
          <span>
            TikTok
            <span className="ml-2 text-gray-400">
              (Optional)
            </span>
          </span>
        }
        placeholder="https://www.tiktok.com/@mytiktok"
      >
        <Input
          className="placeholder:text-xs md:placeholder:text-sm"
          inputMode="url"
        />
      </TextField>

      <div className="grid grid-cols-2 gap-8">
        <PrevButton
          onClick={() => {
            onSubmit((prev: any) => {
              prev.socialMedia = form.getValues();
              return prev;
            });
            onPrev();
          }}
        />
        <NextButton />
      </div>
    </SpeakerFormContainer>
  );
};

export default SpeakerPortofolioForm;
