import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

const Paragraf = ({ className }: { className?: string }) => {
  return Array(3)
    .fill(1)
    .map((_, i) => <Skeleton key={i} className={cn("w-full h-4 rounded-md mb-1", className)} />);
};

export default Paragraf;
