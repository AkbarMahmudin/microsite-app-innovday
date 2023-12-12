import React from "react";
import { z } from "zod";

// components
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  NextButton,
  PrevButton,
  TextField,
  SpeakerFormContainer,
  CheckField,
} from "./components";

// hooks
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useToast } from "@/components/ui/use-toast";

// _mock
import { SpeakerMateriForm as formContent } from "@/_mock";
import { Icon } from "@iconify/react/dist/iconify.js";

const { CATEGORIES, AVAILABILITY, TARGET_AUDIENCE } = formContent;

type Props = {
  materiValues?: z.infer<typeof schema>;
  onSubmit: (prev: any) => void;
  onNext: () => void;
  onPrev: () => void;
};

const schema = z.object({
  title: z.string().min(10, "Judul materi minimal 10 karakter").max(255),
  categories: z.array(z.string()).min(1, "Pilih minimal satu kategori"),
  description: z.string().min(10, "Deskripsi materi minimal 10 karakter"),
  availability: z.enum(["luring", "daring"], {
    required_error: "Pilih salah satu ketersediaan",
  }),
  targetAudience: z.enum(["telkom group", "telkom ddb", "umum"], {
    required_error: "Pilih salah satu target audience",
  }),
  isAgree: z.boolean().refine((val) => val === true, {
    message: "Anda harus menyetujui pernyataan ini untuk melanjutkan",
  }),
  moreInfo: z.string().optional(),
});

const SpeakerMateriForm = ({
  materiValues,
  onSubmit,
  onNext,
  onPrev,
}: Props) => {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: materiValues,
  });

  const handleSubmit = async (values: z.infer<typeof schema>) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));
      
      onSubmit((prev: any) => {
        prev.materi = values;
        return prev;
      });
      
      toast({
        title: "Sukses",
        description: "Pengajuan berhasil terkirim",
        variant: "success",
        icon: <Icon icon="icon-park-solid:success" className="w-6 h-6" />,
      });
      
      onNext();
    } catch (error) {
      toast({
        title: "Gagal",
        description: "Pengajuan gagal terkirim",
        variant: "destructive",
      });
    }
  };

  return (
    <SpeakerFormContainer
      title="Siapkan Materi"
      form={form}
      onSubmit={handleSubmit}
    >
      <TextField
        control={form.control}
        name="title"
        label="Judul/topik materi"
        placeholder="How to be a Good Designer"
      >
        <Input className="placeholder:text-xs md:placeholder:text-sm" />
      </TextField>

      <CheckField
        type="multiple"
        label={
          <span>
            Kategori materi yang ingin Anda ajukan
            <span className="ml-2 text-gray-400">(Dapat lebih dari satu)</span>
          </span>
        }
        control={form.control}
        name="categories"
        options={CATEGORIES}
      />

      <TextField
        control={form.control}
        name="description"
        label="Deskripsi singkat materi"
        placeholder="Materi ini menjelaskan mengenai tips dan trik untuk menjadi seorang designer yang baik"
      >
        <Textarea className="placeholder:text-xs md:placeholder:text-sm" />
      </TextField>

      <CheckField
        type="radio"
        control={form.control}
        label="Ketersediaan Anda untuk mengisi materi"
        name="availability"
        options={AVAILABILITY}
      />

      <CheckField
        type="radio"
        control={form.control}
        label="Target audience yang ingin Anda sasar"
        name="targetAudience"
        options={TARGET_AUDIENCE}
      />

      <TextField
        control={form.control}
        name="moreInfo"
        label={
          <span>
            Informasi tambahan
            <span className="ml-2 text-gray-400">(Opsional)</span>
          </span>
        }
        placeholder="Materi ini hanya membahas terkait tips dan trik mendesain menggunakan figma"
      >
        <Textarea className="placeholder:text-xs md:placeholder:text-sm" />
      </TextField>

      <CheckField
        type="single"
        control={form.control}
        label="Dengan ini, saya menyatakan bahwa semua informasi yang saya berikan adalah benar dan saya berkomitmen untuk mematuhi setiap panduan yang ada di Innovation Day."
        name="isAgree"
      />

      <div className="grid grid-cols-2 gap-8">
        <PrevButton
          onClick={() => {
            onSubmit((prev: any) => {
              prev.materi = form.getValues();
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

export default SpeakerMateriForm;
