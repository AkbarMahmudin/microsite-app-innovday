import {
  ButtonSkeleton,
  HeadingSkeleton,
  ImageSkeleton,
  ParagrafSkeleton,
} from "@/components/custom/skeleton";

const Loading = () => {
  return (
    <section className="container lg:w-1/2 w-full min-h-[calc(100vh-10rem)] flex flex-col justify-center items-center text-muted-foreground mx-auto">
      <div className="lg:h-[360px] h-[200px] w-full items-center inline-flex mb-4">
        <ImageSkeleton />
      </div>
      <HeadingSkeleton className="mb-4" />
      <ParagrafSkeleton />

      <ButtonSkeleton className="mt-8" />
    </section>
  );
};

export default Loading;
