import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

const Button = ({ className }: { className?: string }) => {
  return <Skeleton className={cn("w-full h-10 rounded-md", className)} />;
};

export default Button;
