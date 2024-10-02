import type { SbBlokData } from "@storyblok/js";
import type { NavMenuProps } from "../types";
import { NavMenuDesktop } from "./desktop-nav-menu";
import { NavMenuMobile } from "./mobile-nav-menu";

const links = [
  { label: "About Us", href: "#" },
  { label: "Promos", href: "#" },
  { label: "Contact", href: "/contact" },
  { label: "Deliveries", href: "#" },
];

export type NavbarProps = {
  title: string;
  description: string;
  menus: NavMenuProps[];
} & SbBlokData;

export function Navbar({ title, description, menus }: NavbarProps) {
  return (
    <nav className="relative flex w-full justify-center">
      <NavMenuMobile title={title} description={description} menus={menus} />
      <NavMenuDesktop title={title} description={description} menus={menus} />
    </nav>
  );
}
