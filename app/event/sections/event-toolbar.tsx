"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import useBreakpoint from "@/hooks/useBreakPoint";
import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";

const FilterForm = () => {
  const breakpoint = useBreakpoint();

  return (
    <SheetContent
      side={breakpoint === "lg" || breakpoint === "xl" ? "right" : "bottom"}
    >
      <SheetHeader>
        <SheetTitle>Filters</SheetTitle>
      </SheetHeader>

      <div className="px-1 py-3 flex flex-col gap-5">
        <div className="grid w-full items-center gap-2">
          <Label htmlFor="category">Category</Label>
          <Select>
            <SelectTrigger id="category" className="w-full">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent className="w-full">
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="innovation-day">Innovation Day</SelectItem>
              <SelectItem value="intalks">InTalks</SelectItem>
              <SelectItem value="workshop">Workshop</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="grid w-full items-center gap-2">
          <Label htmlFor="hastag">Hastag</Label>
          <Input id="hastag" placeholder="#tech" className="w-full" />
        </div>
        <div className="flex flex-col w-full items-center gap-2 pt-6">
          <Button className="w-full">Terapkan</Button>
          <Button variant="outline" type="reset" className="w-full">
            Reset
          </Button>
        </div>
      </div>
    </SheetContent>
  );
};

const Toolbar = () => {
  return (
    <div className="min-w-full grid grid-rows-2 gap-5 md:gap-0 md:flex md:justify-between">
      <Input placeholder="Search" className="md:w-1/4" />

      <div className="toolbar-filter flex flex-row justify-between items-center gap-2">
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Latest" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Latest">Latest</SelectItem>
            <SelectItem value="Oldest">Oldest</SelectItem>
          </SelectContent>
        </Select>

        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              className="w-full flex justify-between border border-input rounded-md text-black"
            >
              <span className="text-sm font-medium">Filter</span>
              <Icon icon="bi:filter" className="w-5 h-5" />
            </Button>
          </SheetTrigger>

          <FilterForm />
        </Sheet>
      </div>
    </div>
  );
};

export default Toolbar;
