"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { SheetDemo } from "../SheetDemo";
import { Button } from "../ui/button";

export function NavItems() {
  return (
    <div>
      <NavigationMenu className="lg:flex hidden ">
        <NavigationMenuList>
          <NavigationMenuItem className="mt-1">
            <Link href="/aboutus" legacyBehavior passHref>
              <NavigationMenuLink className="text-white font-medium px-4 hover:text-primary-2">
                Who we are
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem className="mt-1">
            <Link href="/services" legacyBehavior passHref>
              <NavigationMenuLink className="text-white font-medium px-4 hover:text-primary-2">
                What we do
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem className="mt-1">
            <Link href="/projects" legacyBehavior passHref>
              <NavigationMenuLink className="text-white font-medium px-4 hover:text-primary-2">
                What we did
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem className="mt-1">
            <Link href="/blog" legacyBehavior passHref>
              <NavigationMenuLink className="text-white font-medium px-4 hover:text-primary-2">
                Blog
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem className="mt-3">
            <Link href="/request" legacyBehavior passHref>
              <NavigationMenuLink className="text-white font-medium px-4 hover:text-primary-2">
                <Button className="bg-primary-2 md:max-w-min mb-4 text-black font-bold text-lg hover:bg-primary-2 px-4 rounded-none">
                  Get a quote
                </Button>
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
