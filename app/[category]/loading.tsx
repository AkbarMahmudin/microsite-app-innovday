import {
  ButtonSkeleton,
  CardSkeleton,
  HeadingSkeleton,
  ParagrafSkeleton,
  TaglineSkeleton,
} from "@/components/custom/skeleton";

const Loading = () => {
  return (
    <section className="container min-w-full flex flex-col gap-4">
      <TaglineSkeleton className="mb-7" />

      <HeadingSkeleton className="w-1/2" />
      <ParagrafSkeleton />
      <div className="flex justify-between my-4">
        <ButtonSkeleton className="w-1/4" />
        <ButtonSkeleton className="w-1/4" />
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-start gap-3 mt-7">
        {Array(5)
          .fill(1)
          .map((_, i) => (
            <CardSkeleton key={i} />
          ))}
      </div>
    </section>
  );
};

export default Loading;
