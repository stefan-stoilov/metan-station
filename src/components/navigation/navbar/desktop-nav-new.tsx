"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
// import { Icons } from "@/components/icons";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const stations: { title: string; href: string; description: string }[] = [
  {
    title: "КПГ - Благоевград",
    href: "#",
    description: "КПГ Благоевград може да заредите метан.",
  },
  {
    title: "Ида Метан - Стара Загора",
    href: "#",
    description: "Метанстанция Стара Загора",
  },
  {
    title: "CNG - Гоце Делчев",
    href: "#",
    description: "Метанстанция Гоце Делчев",
  },
  {
    title: "- София",
    href: "#",
    description: "Метанстанция София.",
  },
  {
    title: "Бензиностанция - Бургас",
    href: "#",
    description: "Бензиностанция Бургас",
  },
  {
    title: "Метанстанция Симитли",
    href: "#",
    description: "Метанстанция Симитли",
  },
];
const services: { title: string; href: string; description: string }[] = [
  {
    title: "КПГ - Благоевград",
    href: "#",
    description: "КПГ Благоевград може да заредите метан.",
  },
  {
    title: "Ида Метан - Стара Загора",
    href: "#",
    description: "Метанстанция Стара Загора",
  },
  {
    title: "CNG - Гоце Делчев",
    href: "#",
    description: "Метанстанция Гоце Делчев",
  },
  {
    title: "- София",
    href: "#",
    description: "Метанстанция София.",
  },
  {
    title: "Бензиностанция - Бургас",
    href: "#",
    description: "Бензиностанция Бургас",
  },
  {
    title: "Метанстанция Симитли",
    href: "#",
    description: "Метанстанция Симитли",
  },
];

export function NavigationMenuDemo() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>{"Горива"}</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <div className="row-span-3">
                <div className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md">
                  <div className="h-6 w-6" />
                  <div className="mb-2 mt-1 text-lg font-medium">
                    ARG petroleum
                  </div>
                  <p className="text-sm leading-tight text-muted-foreground">
                    {
                      "Предлагаме горива, консумативи и услуги на конкурентни цени."
                    }
                  </p>
                </div>
              </div>
              <ul className="grid grid-cols-2 gap-4">
                <li className="flex flex-col ">
                  <span className="block font-bold">{"Бензин"}</span>
                  <span className="block">{"2.78 лв."}</span>
                </li>
                <li className="flex flex-col ">
                  <span className="block font-bold">{"Дизел"}</span>
                  <span className="block">{"3.28 лв."}</span>
                </li>
                <li className="flex flex-col ">
                  <span className="block font-bold">{"Газ"}</span>
                  <span className="block">{"0.78 лв."}</span>
                </li>
                <li className="flex flex-col ">
                  <span className="block font-bold">{"Метан"}</span>
                  <span className="block">{"4.78 лв."}</span>
                </li>
                <li className="flex flex-col ">
                  <span className="block font-bold">{"Ad Blue"}</span>
                  <span className="block">{"3.08 лв."}</span>
                </li>
              </ul>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>{"Други Обекети"}</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {services.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
              <Link href={"#"} title={"Виж още"}></Link>
            </ul>
          </NavigationMenuContent>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {stations.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
              <ListItem title={"Виж още"}></ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              {"Услуги"}
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
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
            className,
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
