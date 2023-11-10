"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import React from "react";

const StepDescription = ({ title, description, className }: any) => (
  <div className={cn("content pb-8 block", className)}>
    <h4 className="font-bold text-base py-2.5">{title}</h4>
    <p className="description text-xs font-normal leading-normal">
      {description}
    </p>
  </div>
);

type StepListProps = {
  number: number;
  title: string;
  description: string;
  isLastStep?: boolean;
  isActived?: boolean;
};

const Line = ({
  isActived,
  className,
}: {
  isActived: boolean;
  className: string;
}) => (
  <div
    className={cn(
      `flow-step bg-primary ${
        isActived ? "opacity-50" : "opacity-10"
      } transition-all`,
      className
    )}
  ></div>
);

const StepList = ({
  number,
  title,
  description,
  isLastStep = false,
  isActived = false,
}: StepListProps) => (
  <div className="flex flex-row gap-3 self-stretch">
    <div
      className={`md:w-fit w-full flex md:flex-col flex-row items-center ${
        isLastStep ? "justify-start" : "justify-center"
      }`}
    >
      <div
        className={`number-step bg-primary ${
          !isActived && "opacity-20"
        } md:py-2.5 py-1.5 md:px-[19px] px-3 font-bold md:text-base text-xs text-white rounded-full w-fit transition-all`}
      >
        {number}
      </div>
      {!isLastStep && (
        <Line
          isActived={isActived}
          className="md:px-1 md:py-1 md:h-full h-fit md:w-fit w-full transition-all hidden md:block"
        />
      )}
    </div>
    <StepDescription
      title={title}
      description={description}
      className="md:block hidden" />
  </div>
);

type Props = {
  data: {
    title: string;
    description: string;
  }[];
  step: number;
}

const Step = ({ data, step }: Props) => {
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle className="font-bold text-base md:text-2xl">
            Lets Be Our Speaker
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex md:flex-col flex-row items-center md:mb-0 mb-3">
            {data.map((item, index) => (
              <>
                <StepList
                  key={index}
                  number={index + 1}
                  isLastStep={index + 1 === data.length}
                  isActived={step >= index + 1}
                  {...item}
                />
                {!(index + 1 === data.length) && (
                  <Line
                    isActived={step >= index + 1}
                    className="md:px-1 py-0.5 md:h-full h-fit md:w-fit w-full md:hidden"
                  />
                )}
              </>
            ))}
          </div>

          {/* Mobile Version */}
          <StepDescription
            title={data[step - 1]?.title}
            description={data[step - 1]?.description}
            className="md:hidden block text-center"
          />
        </CardContent>
      </Card>
    </>
  );
};

export default Step;
