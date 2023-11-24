import React from "react";

// hooks
import useBreakpoint from "@/hooks/useBreakPoint";

// components
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Icon } from "@iconify/react/dist/iconify.js";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { Tag } from "@/components/custom/badge";

type Props = {
  children: React.ReactNode;
  onFilter: (tags: string[], category: string) => void;
};

const FilterForm = ({ children, onFilter }: Props) => {
  const [tags, setTags] = React.useState<string[]>([]);
  const [category, setCategory] = React.useState<string>("");

  const [isDisabled, setIsDisabled] = React.useState<boolean>(true);

  const breakpoint = useBreakpoint();

  React.useEffect(() => {
    setIsDisabled(tags.length === 0 && category === "");
  }, [tags, category]);

  const handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const value = e.currentTarget.value.replace(/\s/g, "");
      if (value) {
        setTags((prev) => {
          if (!prev.includes(value)) {
            return [...prev, value];
          }

          return prev;
        });
        e.currentTarget.value = "";
      }
    }
  };

  const handleChangeCategory = (value: string) => {
    setCategory(value);
  };

  const handleRemoveTag = (tag: string) => {
    setTags((prev) => prev.filter((t) => t !== tag));
  };

  const handleRemoveTags = () => {
    setTags([]);
  };

  const handleResetFilter = () => {
    handleRemoveTags();
    handleChangeCategory("");
  };

  const handleFilter = () => {
    onFilter(tags, category);
  };

  return (
    <>
      <Sheet>
        <SheetTrigger asChild>{children}</SheetTrigger>

        <SheetContent
          side={
            breakpoint === "lg" || breakpoint === "xl" || breakpoint === "2xl"
              ? "right"
              : "bottom"
          }
        >
          <SheetHeader>
            <SheetTitle>Filters</SheetTitle>
          </SheetHeader>

          <div className="px-1 py-3 flex flex-col gap-5">
            <div className="grid grid-cols-1 w-full items-center gap-3">
              <Label htmlFor="category">Category</Label>
              <Select value={category} onValueChange={handleChangeCategory}>
                <SelectTrigger id="category" className="w-full" value="">
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent className="w-full">
                  <SelectItem value="all">All</SelectItem>
                  <SelectItem value="innovation-day">Innovation Day</SelectItem>
                  <SelectItem value="intalks">InTalks</SelectItem>
                  <SelectItem value="workshop">Workshop</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-1 w-full items-center gap-3">
              <Label htmlFor="hastag">Hastag</Label>
              <Input
                id="hastag"
                placeholder="#tech"
                className="w-full"
                icon={<Icon icon="basil:search-outline" className="w-6 h-6" />}
                onKeyUp={handleKeyUp}
              />

              {tags.length !== 0 && (
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        variant="destructive"
                        size="sm"
                        className="flex items-center gap-1.5 w-fit bg-destructive"
                        onClick={handleRemoveTags}
                      >
                        <Icon icon="ion:trash-bin" width={18} />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent side="right">
                      <p>
                        Clear all <strong>tags</strong>
                      </p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              )}

              <div className="tags__content mt-2 flex flex-wrap gap-1">
                {tags.map((tag, index) => (
                  <Tag
                    key={index}
                    text={tag}
                    onClose={() => handleRemoveTag(tag)}
                  />
                ))}
              </div>
            </div>
            <div className="flex flex-col w-full items-center gap-2 pt-6">
              <Button className="w-full" disabled={isDisabled} onClick={handleFilter}>
                Terapkan
              </Button>
              <Button
                variant="outline"
                type="reset"
                className="w-full"
                disabled={isDisabled}
                onClick={handleResetFilter}
              >
                Reset
              </Button>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default FilterForm;
