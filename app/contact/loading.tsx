import { Skeleton } from "@/components/ui/skeleton";

const Loading = () => {
  return (
    <section className="container min-w-full grid lg:grid-cols-2 grid-cols-1 gap-4 items-center">
      <Skeleton className="w-full h-96 rounded-md" />
      <Skeleton className="flex flex-col gap-6 p-4">
        <Skeleton className="w-1/2 h-10 rounded-md bg-white/70" />
        <Skeleton className="w-full h-10 rounded-md bg-white/70" />
        <Skeleton className="w-full h-10 rounded-md bg-white/70" />
        <Skeleton className="w-full h-10 rounded-md bg-white/70" />
        <Skeleton className="w-full h-10 rounded-md bg-white/70 mb-4" />
      </Skeleton>
    </section>
  );
};

export default Loading;
