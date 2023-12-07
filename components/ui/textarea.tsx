import * as React from "react"

import { cn } from "@/lib/utils"

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    isValid?: boolean;
  }

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, isValid = true, ...props }, ref) => {
    const validationColor = isValid ? "ring-offset-primary focus-visible:ring-ring" : "ring-offset-destructive focus-visible:ring-red-500/50 border-destructive border-2";

    return (
      <textarea
        className={cn(
          `flex min-h-[80px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ${validationColor} placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50`,
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Textarea.displayName = "Textarea"

export { Textarea }
