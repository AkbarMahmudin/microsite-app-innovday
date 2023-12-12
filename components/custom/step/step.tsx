"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import React from "react";

type StepDescriptionProps = {
  title: string;
  description: string | React.ReactNode;
  component?: React.ReactNode;
  className?: string;
};

const StepDescription = ({ title, description, component, className }: StepDescriptionProps) => (
  <div className={cn("content pb-8 block", className)}>
    <h4 className="font-bold text-base py-2.5">{title}</h4>
    <p className="description text-xs md:text-sm font-normal leading-normal">
      {description}
      {component}
      {/* {typeof description === "function" ? description() : description} */}
    </p>
  </div>
);

type StepListProps = {
  number: number;
  title: string;
  description: string | React.ReactNode;
  component?: React.ReactNode;
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
  component,
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
      component={component}
      className="md:block hidden"
    />
  </div>
);

type Props = {
  title: string;
  data: {
    title: string;
    description: string | React.ReactNode;
    component?: React.ReactNode;
  }[];
  step: number;
  className?: string;
};

const Step = ({ title, data, step, className }: Props) => {
  return (
    <>
      <Card className={className}>
        <CardHeader>
          <CardTitle className="font-bold text-base md:text-2xl">
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="flex md:flex-col flex-row items-center md:mb-0 mb-3">
            {data.map((item, index) => (
              <li
                key={index}
                className={
                  index + 1 < data.length ? "flex flex-row w-full items-center" : ""
                }
              >
                <StepList
                  number={index + 1}
                  isLastStep={index + 1 === data.length}
                  isActived={step >= index + 1}
                  {...item}
                />
                {index + 1 !== data.length && (
                  <Line
                    isActived={step >= index + 1}
                    className="md:px-1 py-0.5 md:h-full h-fit md:w-fit w-full md:hidden"
                  />
                )}
              </li>
            ))}
          </ul>

          {/* Mobile Version */}
          <StepDescription
            title={data[step - 1]?.title}
            description={data[step - 1]?.description}
            component={data[step - 1]?.component}
            className="md:hidden block text-center"
          />
        </CardContent>
      </Card>
    </>
  );
};

export default Step;
