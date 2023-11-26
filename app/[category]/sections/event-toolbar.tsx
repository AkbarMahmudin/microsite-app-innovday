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
};

const Toolbar = ({ onSearch, onSort, onFilter }: Props) => {

  const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onSearch(e.currentTarget.value);
    }
  };

  return (
    <div className="container min-w-full h-full grid grid-rows-2 gap-5 md:gap-0 md:flex md:justify-between">
      <Input
        placeholder="Search"
        className="md:w-1/2 h-full"
        icon={<Icon icon="basil:search-outline" className="w-6 h-6" />}
        onKeyUp={handleSearch}
      />

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
        <FilterForm onFilter={onFilter}>
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
