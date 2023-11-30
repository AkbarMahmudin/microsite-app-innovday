import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { HeadingSkeleton, ImageSkeleton, ParagrafSkeleton } from ".";

const CardSkeleton = () => {
  return (
    <Card className="w-full h-96 rounded-md overflow-hidden">
      <ImageSkeleton className="w-full h-full rounded-none" />
      <CardHeader>
        <HeadingSkeleton className="w-1/2 h-7 rounded-md" />
      </CardHeader>
      <CardContent>
        <ParagrafSkeleton className="w-full h-4 rounded-md opacity-50" />
      </CardContent>
    </Card>
  );
};

export default CardSkeleton;
