import React from "react";
import { ColorVariants, colorVariants } from "./_color-variants";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

type Props = ColorVariants & {
  question: string;
  answer: string | React.ReactNode;
};

const FaqCard = ({ question, answer, color = "white" }: Props) => {
  return (
    <Card className={`${colorVariants[color]} rounded-[20px] ${color === 'white' && 'text-primary'}`}>
      <CardHeader>
        <CardTitle className="text-2xl font-bold">{question}</CardTitle>
      </CardHeader>
      <CardContent className="text-lg font-normal leading-7">
        {answer}
      </CardContent>
    </Card>
  );
};

export default FaqCard;
