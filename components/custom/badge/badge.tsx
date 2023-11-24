import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import React from "react";

type Props = React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof badgeVariants> & {
    children: React.ReactNode;
  };

export const badgeVariants = cva(
  "px-2 py-1 rounded justify-center items-start gap-2.5 inline-flex",
  {
    variants: {
      variant: {
        default: "bg-teal-600 bg-opacity-20 text-primary font-normal",
        secondary: "bg-teal-600 bg-opacity-50 text-white font-semibold",
        tertiary: "bg-white text-primary font-normal",
        danger: "bg-red-600 bg-opacity-20 text-red-600 font-normal",
      },
      size: {
        default: "text-xl",
        small: "text-sm",
        large: "text[32px]"
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const Badge = ({ variant, size, className, children }: Props) => {
  return (
    <div className={cn(badgeVariants({ variant, size, className }))}>
      {children}
    </div>
  );
};

export default Badge;
