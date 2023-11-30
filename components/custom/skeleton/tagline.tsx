import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

const Paragraf = ({ className }: { className?: string }) => {
  return <Skeleton className={cn("w-1/2 h-7 rounded-md", className)} />;
};

export default Paragraf;
