import * as React from "react";

import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode;
  isValid?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, icon, isValid = true, ...props }, ref) => {
    const validationColor = isValid ? "ring-offset-primary focus-visible:ring-ring" : "ring-offset-destructive focus-visible:ring-red-500/50 border-destructive border-2";
    
    if (icon) {
      return (
        <div className="relative h-full w-full">
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 p-3 text-gray-400">
            {icon}
          </div>
          <input
            type={type}
            className={cn(
              `flex h-full w-full rounded-md border border-input bg-transparent pr-3 pl-10 py-2 text-sm ${validationColor} file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50`,
              className
            )}
            ref={ref}
            {...props}
          />
        </div>
      );
    }

    return (
      <input
        type={type}
        className={cn(
          `flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ${validationColor} file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50`,
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
