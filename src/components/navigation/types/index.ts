import type { SbBlokData } from "@storyblok/react/rsc";
import type { SbLink } from "@/configs/types";

export type NavMenuItemProps = {
  title: string;
  description?: string;
  link: SbLink;
} & SbBlokData;

export type NavMenuProps = {
  title: string;
  items: NavMenuItemProps[];
  style: "regular" | "fuel";
};
