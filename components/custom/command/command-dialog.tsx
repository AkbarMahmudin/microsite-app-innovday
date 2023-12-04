"use client";

import React from "react";
import {
  CommandDialog,
  CommandEmpty,
  CommandInput,
  CommandList,
} from "@/components/ui/command";
import { useRouter } from "next/navigation";

import { CommandNavigationMenu, CommandEventList } from ".";

type Props = {
  eventData?: any;
  navData?: any;
  open: boolean;
  onSearch?: (value: string) => void;
  onOpenChange: React.Dispatch<React.SetStateAction<boolean>>;
};

const Dialog = ({
  open,
  navData,
  eventData = [],
  onOpenChange,
  onSearch = () => {},
}: Props) => {
  const router = useRouter();

  const handleSelect = (value: string) => {
    onOpenChange(false);
    return router.push(value);
  };

  const handleSearch = (value: string) => {
    onSearch(value);
  };

  return (
    <CommandDialog open={open} onOpenChange={onOpenChange}>
      <CommandInput
        placeholder="Type a command or search..."
        onChangeCapture={(e) => handleSearch(e.currentTarget.value)}
      />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandNavigationMenu
          data={navData || []}
          handleSelect={handleSelect}
        />

        <CommandEventList data={eventData} handleSelect={handleSelect} />
      </CommandList>
    </CommandDialog>
  );
};

export default Dialog;
