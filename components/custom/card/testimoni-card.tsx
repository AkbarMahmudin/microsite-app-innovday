import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../../ui/avatar";
import { ColorVariants, colorVariants } from "./_color-variants";

// type
import { Testimoni } from "@/types";

type Props = ColorVariants & Testimoni;

const TestimoniCard = ({
  profilUrl = '',
  name,
  job,
  title,
  description,
  color = "white",
}: Props) => {
  return (
    <Card className={`${colorVariants[color]}`}>
      <CardHeader className="pb-0">
        <CardTitle className="text-base">{title}</CardTitle>
      </CardHeader>
      <CardContent className="py-2 text-sm">
        <p className="border-b pb-2 mb-2">{description}</p>
      </CardContent>
      <CardFooter className="pt-0 flex flex-row items-center justify-start gap-2">
        <Avatar>
          <AvatarImage src={profilUrl} alt={name} />
          <AvatarFallback>
            {name[0]}
          </AvatarFallback>
        </Avatar>
        <div className="w-full">
          <p className="text-sm font-semibold">{name}</p>
          <p className={`text-xs ${color === 'white' ? 'text-foreground opacity-50' : 'text-white/80'} font-normal`}>{job}</p>
        </div>
      </CardFooter>
    </Card>
  );
};

export default TestimoniCard;
