"use client";

import { CommandGroup, CommandItem } from "@/components/ui/command";
import { paths } from "@/routes/paths";
import Image from "next/image";

const CommandEventList = ({
  data,
  handleSelect,
}: {
  data: any[];
  handleSelect: (value: string) => void;
}) => {
  return (
    data.length > 0 && (
      <CommandGroup heading="Events">
        {data.map(({ id, title, thumbnailUrl }: any) => (
          <CommandItem
            key={id}
            value={`${title}-${id}`}
            onSelect={() => handleSelect(paths.events.detail(id))}
            className="flex items-center gap-3"
          >
            <Image
              src={thumbnailUrl}
              alt={title}
              width={50}
              height={50}
              className="w-3/12 rounded"
              fetchPriority="low"
            />
            {title}
          </CommandItem>
        ))}
      </CommandGroup>
    )
  );
};

export default CommandEventList;
