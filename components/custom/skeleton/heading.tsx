import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

const Heading = ({ className }: { className?: string }) => {
  return <Skeleton className={cn("w-3/4 h-14 rounded-md", className)} />;
};

export default Heading;
