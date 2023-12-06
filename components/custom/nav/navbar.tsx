"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

// icon
import { Icon } from "@iconify/react";

// utils
import { cn } from "@/lib/utils";
import { getKeyControl } from "@/lib/user-agent";

// components
import HumbergerMenu from "./humberger-menu";
import { Announcement, AnnouncementProps } from "../announcement";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CommandDialog } from "@/components/custom/command";
import { Button } from "@/components/ui/button";

// hooks
import useCommand from "@/hooks/useCommand";

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  const pathname = usePathname();
  const isActive = pathname === props.href;

  return (
    <li>
      <NavigationMenuLink
        className={`${isActive ? "text-primary" : ""}`}
        active={isActive}
        asChild
      >
        <Link
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          href={props.href as string}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

const ChildrenItem = ({ title, item }: any) => {
  const pathname = usePathname();
  const isActive = item
    .map(({ path }: { path: string }) => path)
    .includes(pathname)
    ? "text-primary"
    : "";

  return (
    <>
      <Accordion
        type="single"
        collapsible
        className="px-4 text-sm font-medium block lg:hidden"
      >
        <AccordionItem value={title}>
          <AccordionTrigger className={`w-full ${isActive}`}>
            {title}
          </AccordionTrigger>
          <AccordionContent>
            {item.map((childItem: any) => (
              <ListItem
                key={childItem.title}
                title={childItem.title}
                href={childItem.path}
                className="p-4"
              ></ListItem>
            ))}
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <div className="hidden lg:block">
        <NavigationMenuTrigger className={isActive}>
          {title}
        </NavigationMenuTrigger>
        <NavigationMenuContent>
          <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
            {item.map((childItem: any, index: number) => {
              return index < 1 ? (
                <li key={index} className="row-span-3">
                  <NavigationMenuLink asChild>
                    <Link
                      className={cn(
                        "flex h-full w-full select-none flex-col justify-center rounded-md bg-gradient-to-br from-popover to-accent p-6 no-underline outline-none focus:shadow-md transition-all",
                        pathname === childItem.path && "border-primary border-2"
                      )}
                      href={childItem.path}
                    >
                      <Icon
                        icon="material-symbols-light:event-note"
                        width={26}
                        className={"text-primary"}
                      />
                      <div
                        className={`mb-2 mt-4 text-lg font-medium bg-clip-text text-transparent bg-gradient-to-r from-primary to-yellow-300`}
                      >
                        {childItem.title}
                      </div>
                      <p className="text-sm leading-tight text-muted-foreground">
                        {childItem.description}
                      </p>
                    </Link>
                  </NavigationMenuLink>
                </li>
              ) : (
                <ListItem
                  key={childItem.title}
                  title={childItem.title}
                  href={childItem.path}
                  className="p-4"
                >
                  {childItem.description}
                </ListItem>
              );
            })}
          </ul>
        </NavigationMenuContent>
      </div>
    </>
  );
};

const MenuItems = ({ items }: any) => {
  const pathname = usePathname();

  return items.map((item: any) => (
    <NavigationMenuItem key={item.title} className="w-full">
      {item.children ? (
        <ChildrenItem title={item.title} item={item.children} />
      ) : (
        <Link href={item.path} legacyBehavior passHref>
          <NavigationMenuLink
            className={`${navigationMenuTriggerStyle()} ${
              pathname === item.path ? "text-primary" : ""
            }`}
          >
            {item.title}
          </NavigationMenuLink>
        </Link>
      )}
    </NavigationMenuItem>
  ));
};

type Props = {
  announcement?: AnnouncementProps;
};

export default function Navbar({ announcement }: Props) {
  const { eventData, navData, open, setOpen, handleOpenChange, handleSearch } =
    useCommand();

  const [keyControl, setKeyControl] = React.useState("");

  React.useEffect(() => {
    setKeyControl(getKeyControl());
  }, [keyControl]);

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [setOpen]);

  return (
    <>
      <header className="relative w-full bg-transparent backdrop-blur-3xl">
        {announcement && <Announcement {...announcement} />}
      </header>
      <nav className="sticky top-0 z-50 container min-w-full justify-between items-center inline-flex backdrop-blur-[50px] bg-opacity-80 bg-cyan-50 shadow">
        <Link href="/">
          <Image
            src="/logo/innovday_full.png"
            alt="Innovation Day Logo"
            width={130}
            height={130}
          />
        </Link>

        <NavigationMenu className="hidden lg:block">
          <NavigationMenuList>
            <MenuItems items={navData} />
          </NavigationMenuList>
          <NavigationMenuViewport />
        </NavigationMenu>

        <HumbergerMenu
          menu={<MenuItems items={navData} />}
          side="right"
          onOpen={setOpen}
        />

        {/* <Button
          variant="outline"
          className="pl-1.5 pr-2 rounded-[10px] bg-transparent justify-center items-center gap-1 lg:inline-flex hidden border-input"
          onClick={() => setOpen((prev) => !prev)}
        >
          <Icon
            icon="basil:search-outline"
            width="22"
            height="22"
            color="#909090"
            className="mr-2"
          />
          <div className="text-neutral-400 text-base font-normal">Search</div>
          {keyControl && (
            <kbd className="inline-flex ml-2 pointer-events-none h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-[#909090] opacity-100">
              <span className="text-xs">{keyControl}</span>K
            </kbd>
          )}
        </Button> */}

        <CommandDialog
          open={open}
          navData={navData}
          eventData={eventData}
          onOpenChange={handleOpenChange}
          onSearch={handleSearch}
        />
      </nav>
    </>
  );
}
