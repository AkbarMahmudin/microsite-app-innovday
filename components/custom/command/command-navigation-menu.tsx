"use client";

import { CommandGroup, CommandItem } from "@/components/ui/command";
import { Icon } from "@iconify/react/dist/iconify.js";

const CommandNavigationMenu = ({
  data,
  handleSelect,
}: {
  data: any[];
  handleSelect: (value: string) => void;
}) => {
  return (
    data.length > 0 && (
      <CommandGroup heading="Pages">
        {data.map((item: any) => {
          if (item.children) {
            return (
              <CommandGroup key={item.title} heading={item.title}>
                {item.children.map((child: any) => (
                  <CommandItem
                    key={child.title}
                    onSelect={() => handleSelect(child.path)}
                    value={child.title}
                  >
                    <Icon icon="iconoir:page" className="mr-2" />
                    {child.title}
                  </CommandItem>
                ))}
              </CommandGroup>
            );
          }

          return (
            <CommandItem
              key={item.title}
              value={item.title}
              onSelect={() => handleSelect(item.path)}
            >
              <Icon icon="iconoir:page" className="mr-2" />
              {item.title}
            </CommandItem>
          );
        })}
      </CommandGroup>
    )
  );
};

export default CommandNavigationMenu;
