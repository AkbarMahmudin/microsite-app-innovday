"use client";

import React from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Icon } from "@iconify/react/dist/iconify.js";
import { FilterForm } from "./components";
import { SelectGroup } from "@radix-ui/react-select";

type Props = {
  onSearch: (value: string) => void;
  onSort: (value: string) => void;
  onFilter: (tags: string[], category: string) => void;
  onResetFilter: () => void;
  currentCategory?: string;
  currentTags?: string[];
  showCategory?: boolean;
};

const Toolbar = ({
  onSearch,
  onSort,
  onFilter,
  onResetFilter,
  currentCategory = "",
  currentTags = [],
  showCategory = true,
}: Props) => {
  const searchRef = React.useRef<HTMLInputElement>(null);

  const [clear, setClear] = React.useState<boolean>(false);

  const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onSearch(e.currentTarget.value);
    }
  };

  const handleReset = () => {
    setClear(false);
    searchRef.current?.value && (searchRef.current.value = "");
    onSearch("");
  };

  const handleChange = (e: React.FocusEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;

    value.length > 0 ? setClear(true) : handleReset();
  };

  return (
    <div className="container min-w-full h-full grid grid-rows-2 gap-5 md:gap-0 md:flex md:justify-between">
      <div className="md:w-1/2 h-fit relative">
        <Input
          placeholder="Search"
          className="w-full h-full"
          icon={<Icon icon="basil:search-outline" className="w-6 h-6" />}
          onKeyUp={handleSearch}
          onChange={handleChange}
          ref={searchRef}
        />
        {clear && (
          <Button
            className="absolute top-1/2 transform -translate-y-1/2 right-0.5 rounded-s-none h-min bg-background hover:bg-background text-black"
            onClick={handleReset}
          >
            <Icon icon="clarity:close-line" className="w-5 h-5" />
          </Button>
        )}
      </div>

      <div className="toolbar-filter flex flex-row justify-between items-center gap-3">
        {/* Sort */}
        <Select onValueChange={(value) => onSort(value)}>
          <SelectTrigger>
            <SelectValue placeholder="Sort" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Sort</SelectLabel>
              <SelectItem value="latest">Latest</SelectItem>
              <SelectItem value="oldest">Oldest</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>

        {/* Filter */}
        <FilterForm
          onFilter={onFilter}
          onReset={onResetFilter}
          currentCategory={currentCategory}
          currentTags={currentTags}
          showCategory={showCategory}
        >
          <Button
            variant="outline"
            className="w-full flex justify-between border border-input rounded-md text-black"
          >
            <span className="text-sm font-medium">Filter</span>
            <Icon icon="bi:filter" className="w-5 h-5" />
          </Button>
        </FilterForm>
      </div>
    </div>
  );
};

export default Toolbar;
