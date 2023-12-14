"use client";

import { Button } from "@/components/custom/button";
import { Icon } from "@iconify/react/dist/iconify.js";

type Props = {
  className?: string;
  type?: "submit" | "button";
  onClick?: () => void;
};

export const PrevButton = ({ type = "button", className, onClick }: Props) => (
  <Button
    type={type}
    variant="secondary"
    className={className}
    onClick={onClick}
    name="prev-button"
  >
    <Icon icon="ci:arrow-left-lg" width={20} className="mr-2" /> Sebelumnya
  </Button>
);

export const NextButton = ({ type = "submit", className }: Props) => (
  <Button type={type} className={className} name="next-button">
    Selanjutnya <Icon icon="ci:arrow-right-lg" width={20} className="ml-2" />
  </Button>
);
