"use client";

import React from "react";
import { Button as ButtonUi } from "@/components/ui/button";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "tertiary";
  size?: "default" | "lg" | "sm" | "icon";
}

const Button = ({
  children,
  variant = "primary",
  size = "default",
  ...props
}: Props) => {
  const variants = {
    primary: "default",
    secondary: "outline",
    tertiary: "secondary",
  };

  const buttonStyles = {
    primary: "",
    secondary: "",
    tertiary:
      "border-white border-2 text-white bg-transparent hover:bg-white/20",
  };

  return (
    <ButtonUi
      variant={variants[variant] as any}
      size={size}
      className={buttonStyles[variant] as any}
      {...props}
    >
      {children}
    </ButtonUi>
  );
};

export default Button;
