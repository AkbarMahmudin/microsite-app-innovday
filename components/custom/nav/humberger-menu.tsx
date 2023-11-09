import { Icon } from "@iconify/react/dist/iconify.js";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { NavigationMenu, NavigationMenuList, NavigationMenuViewport } from "../../ui/navigation-menu";
import React from "react";

type Props = {
  menu: React.ReactNode[];
  side?: "top" | "bottom" | "left" | "right";
  onOpen(prev: any): any;
};

const HumbergerMenu = ({ menu, side = "top", onOpen }: Props) => {
  const widthSheet = {
    top: "w-full",
    bottom: "w-full",
    left: "w-1/2",
    right: "w-1/2",
  };

  return (
    <div className="grid grid-cols-2 gap-2 md:hidden items-center">
      <Icon
        icon="basil:search-outline"
        width="24"
        height="24"
        color="#909090"
        onClick={() => onOpen((prev: any) => !prev)}
      />
      <Sheet>
        <SheetTrigger className="block md:hidden">
          <Icon icon="solar:hamburger-menu-broken" width="30" height="30" />
        </SheetTrigger>
        <SheetContent side={side} className={widthSheet[side]}>
          <NavigationMenu className="min-w-full justify-start my-6">
            <NavigationMenuList className="flex flex-col justify-start items-start w-full">
              {menu}
            </NavigationMenuList>
            <NavigationMenuViewport />
          </NavigationMenu>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default HumbergerMenu;
