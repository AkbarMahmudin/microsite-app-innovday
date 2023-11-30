import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

const Image = ({ className }: { className?: string }) => {
  return (
    <Skeleton className={cn("w-full lg:h-2/4 h-full rounded-md", className)} />
  );
};

export default Image;
