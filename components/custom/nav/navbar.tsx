"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";

import { Icon } from "@iconify/react";
import { cn } from "@/lib/utils";
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
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Button } from "@/components/ui/button";

import HumbergerMenu from "./humberger-menu";
import { getKeyControl } from "@/lib/user-agent";
import { Announcement, AnnouncementProps } from "../announcement";
import { usePathname } from "next/navigation";

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
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

const MenuItems = ({ items }: any) => {
  const pathname = usePathname();

  return items.map((item: any) => (
    <NavigationMenuItem key={item.title} className="w-full">
      {item.children ? (
        <>
          <Accordion
            type="single"
            collapsible
            className="px-4 text-sm font-medium block lg:hidden"
          >
            <AccordionItem value={item.title}>
              <AccordionTrigger className="w-full">
                {item.title}
              </AccordionTrigger>
              <AccordionContent>
                {item.children.map((childItem: any) => (
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
            <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="w-[160px] py-2">
                {item.children.map((childItem: any) => (
                  <ListItem
                    key={childItem.title}
                    title={childItem.title}
                    href={childItem.path}
                    className="p-4"
                  ></ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </div>
        </>
      ) : (
        <Link
          href={item.path}
          legacyBehavior
          passHref
        >
          <NavigationMenuLink className={`${navigationMenuTriggerStyle()} ${pathname === item.path ? "text-primary" : ""}`}>
            {item.title}
          </NavigationMenuLink>
        </Link>
      )}
    </NavigationMenuItem>
  ));
};

type Props = {
  data: any;
  announcement?: AnnouncementProps;
};

export default function Navbar({ data, announcement }: Props) {
  const [open, setOpen] = React.useState(false);
  const [keyControl, setKeyControl] = React.useState("");

  React.useEffect(() => {
    setKeyControl(getKeyControl());
  }, [keyControl]);

  // const menuItems = renderMenutItems(data);

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <header className="fixed z-10 w-full bg-transparent backdrop-blur-3xl">
      {announcement && <Announcement {...announcement} />}
      <nav className="container min-w-full justify-between items-center inline-flex backdrop-blur-[50px] bg-opacity-80 bg-cyan-50 shadow">
        <Image
          src="/logo/innovday_full.png"
          alt="Innovation Day Logo"
          width={130}
          height={130}
        />

        <NavigationMenu className="hidden lg:block">
          <NavigationMenuList>
            <MenuItems items={data} />
          </NavigationMenuList>
          <NavigationMenuViewport />
        </NavigationMenu>

        <HumbergerMenu
          menu={<MenuItems items={data} />}
          side="right"
          onOpen={setOpen}
        />

        <Button
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
        </Button>

        <CommandDialog open={open} onOpenChange={setOpen}>
          <CommandInput placeholder="Type a command or search..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Suggestions">
              <CommandItem>Calendar</CommandItem>
              <CommandItem>Search Emoji</CommandItem>
              <CommandItem>Calculator</CommandItem>
            </CommandGroup>
          </CommandList>
        </CommandDialog>
      </nav>
    </header>
  );
}
