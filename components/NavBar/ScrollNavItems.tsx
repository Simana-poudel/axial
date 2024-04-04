"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { SheetDemo } from "../SheetDemo";
import { Button } from "../ui/button";
import { usePathname } from "next/navigation";

const NavigationItems: {
  index: string;
  title: string;
  href: string;
}[] = [
  {
    index: "1",
    title: "Who we are",
    href: "/aboutus",
  },
  {
    index: "2",
    title: "What we do",
    href: "/services",
  },
  {
    index: "3",
    title: "What we did",
    href: "/projects",
  },
  {
    index: "4",
    title: "Blog",
    href: "/blog",
  },
];

export function ScrollNavItems() {
  const currentPath = usePathname();

  return (
    <div>
      <NavigationMenu className="lg:flex hidden ">
        <NavigationMenuList className="py-3">
          {NavigationItems.map((item) => (
            <NavigationMenuItem key={item.index} className="mt-1">
              <Link href={item.href} legacyBehavior passHref>
                <NavigationMenuLink
                  className={`text-primary-1 font-medium px-4 hover:text-primary-2 font-nav ${
                    currentPath === item.href
                      ? "underline underline-offset-8 decoration-primary-2 decoration-2 transition-all duration-1000	 ease-out "
                      : ""
                  } `}
                >
                  {item.title}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          ))}

          <NavigationMenuItem className="mt-1">
            <Link href="/request" legacyBehavior passHref>
              <NavigationMenuLink className="font-medium hover:scale-50 py-2 font-nav bg-primary-2 md:max-w-min mb-4 text-black text-lg hover:bg-primary-2 px-4 ml-2">
                Get a quote
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <div className="lg:hidden flex">
        <div className="pl-4">
          <SheetDemo />
        </div>
      </div>
    </div>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
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
