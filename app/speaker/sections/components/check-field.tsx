import { Checkbox } from "@/components/ui/checkbox";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import React from "react";

type Props = {
  type: "single" | "multiple" | "radio";
  label?: string | React.ReactNode;
  control: any;
  name: string;
  options?: {
    label: string;
    value: string;
  }[];
};

const SingleCheckField = ({ label, control, name }: Props) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field, fieldState }) => (
        <FormItem className="flex flex-row flex-wrap items-center gap-4">
          <FormControl id={name}>
            <Checkbox
              checked={field.value}
              onCheckedChange={field.onChange}
              className={`text-sm md:text-base rounded ${
                fieldState.invalid ? "border-destructive" : ""
              }`}
            />
          </FormControl>
          <FormLabel
            htmlFor={name}
            className="text-sm md:text-base font-normal text-black col-span-2 w-[calc(100%-2rem)] cursor-pointer"
          >
            {label}
          </FormLabel>
          <FormMessage className="md:text-sm text-xs" />
        </FormItem>
      )}
    />
  );
};

const MultipleCheckField = ({ label, control, name, options }: Props) => {
  if (!options) return null;

  return (
    <FormField
      control={control}
      name={name}
      render={({ fieldState }) => (
        <FormItem>
          <FormLabel className="text-sm md:text-base text-black">
            {label}
          </FormLabel>
          {options.map(({ label, value }) => (
            <FormField
              key={label}
              control={control}
              name={name}
              render={({ field }) => (
                <FormItem
                  key={label}
                  className="flex flex-row items-start space-x-3 space-y-0 py-1"
                >
                  <FormControl>
                    <Checkbox
                      checked={field.value.includes(value)}
                      onCheckedChange={(val) => {
                        if (val) {
                          field.onChange([...field.value, value]);
                        } else {
                          field.onChange(
                            field.value.filter((v: any) => v !== value)
                          );
                        }
                      }}
                      className={`text-sm md:text-base rounded ${
                        fieldState.invalid ? "border-destructive" : ""
                      }`}
                    />
                  </FormControl>
                  <FormLabel className="text-sm md:text-base text-black font-normal cursor-pointer">
                    {label}
                  </FormLabel>
                </FormItem>
              )}
            />
          ))}
          <FormMessage className="md:text-sm text-xs" />
        </FormItem>
      )}
    />
  );
};

const RadioCheckField = ({ label, control, name, options }: Props) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field, fieldState }) => (
        <FormItem>
          <FormLabel className="text-sm md:text-base text-black">
            {label}
          </FormLabel>
          <FormControl>
            <RadioGroup
              defaultValue={field.value}
              onChange={field.onChange}
              className={`text-sm md:text-base rounded ${
                fieldState.invalid ? "border-destructive" : ""
              }`}
            >
              {options?.map(({ label, value }) => (
                <FormItem key={value} className="py-1">
                  <FormControl>
                    <RadioGroupItem value={value} />
                  </FormControl>
                  <FormLabel className="text-sm md:text-base text-black font-normal ml-3">
                    {label}
                  </FormLabel>
                </FormItem>
              ))}
            </RadioGroup>
          </FormControl>
          <FormMessage className="md:text-sm text-xs" />
        </FormItem>
      )}
    />
  );
};

const CheckField = (props: Props) => {
  const { type } = props;
  const components = {
    single: <SingleCheckField {...props} />,
    multiple: <MultipleCheckField {...props} />,
    radio: <RadioCheckField {...props} />,
  };

  return components[type];
};

export default CheckField;
