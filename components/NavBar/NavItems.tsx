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

const services: { title: string; href: string }[] = [
  {
    title: "Service 1",
    href: "/service1",
  },
  {
    title: "Service 2",
    href: "/service2",
  },
];

const projects: { title: string; href: string }[] = [
  {
    title: "Project 1",
    href: "/project1",
  },
  {
    title: "Project 2",
    href: "/project2",
  },
];

const blogs: { title: string; href: string }[] = [
  {
    title: "Blog 1",
    href: "/blog1",
  },
  {
    title: "Blog 2",
    href: "/blog2",
  },
];

const contacts: { title: string; href: string }[] = [
  {
    title: "Contact 1",
    href: "/contact1",
  },
  {
    title: "Contact 2",
    href: "/contact2",
  },
];

const pages: { title: string; href: string }[] = [
  {
    title: "Page 1",
    href: "/page1",
  },
  {
    title: "Page 2",
    href: "/page2",
  },
];

export function NavItems() {
  return (
    <div>
      <NavigationMenu className="lg:flex hidden ">
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link href="/" legacyBehavior passHref>
              <NavigationMenuLink className="text-white font-medium p-3 hover:text-primary-2">
                HOME
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/" legacyBehavior passHref>
              <NavigationMenuLink className="text-white font-medium p-3 hover:text-primary-2">
                ABOUT
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger className="text-white font-medium mx-2 bg-transparent hover:text-primary-2">
              SERVICES
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className=" w-[100px] ">
                {services.map((item) => (
                  <ListItem
                    key={item.title}
                    title={item.title}
                    href={item.href}
                  ></ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger className="text-white font-medium mx-2 bg-transparent hover:text-primary-2">
              PROJECTS
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className=" w-[100px] ">
                {projects.map((item) => (
                  <ListItem
                    key={item.title}
                    title={item.title}
                    href={item.href}
                  ></ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger className="text-white font-medium mx-2 bg-transparent hover:text-primary-2">
              BLOG
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className=" w-[100px] ">
                {blogs.map((item) => (
                  <ListItem
                    key={item.title}
                    title={item.title}
                    href={item.href}
                  ></ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger className="text-white font-medium mx-2 bg-transparent hover:text-primary-2">
              CONTACTS
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className=" w-[100px] ">
                {contacts.map((item) => (
                  <ListItem
                    key={item.title}
                    title={item.title}
                    href={item.href}
                  ></ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/quote" legacyBehavior passHref>
              <NavigationMenuLink className="text-white font-medium mx-2 hover:text-primary-2">
                REQUEST/QUOTE
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
