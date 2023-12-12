import React from "react";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

type Props = {
  label: string | React.ReactNode;
  name: string;
  placeholder?: string;
  description?: string;
  type?: string;
  control: any;
  children?: React.ReactNode;
};

const TextField = ({
  label,
  name,
  placeholder,
  type = "text",
  description,
  control,
  children,
}: Props) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field, fieldState }) => (
        <FormItem>
          <FormLabel htmlFor={name} className="text-sm md:text-base text-black">
            {label}
          </FormLabel>
          <FormControl>
            {React.cloneElement(children as React.ReactElement<any>, {
              ...field,
              id: name,
              placeholder,
              type,
              isValid: !fieldState.invalid,
              checked: field.value,
              onCheckedChange: field.onChange,
            })}
          </FormControl>
          <FormDescription className="md:text-sm text-xs">
            {description}
          </FormDescription>
          <FormMessage className="md:text-sm text-xs" />
        </FormItem>
      )}
    />
  );
};

export default TextField;
