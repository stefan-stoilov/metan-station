import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import type { SbImage } from "@/configs/types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function hasSbImage(image: SbImage | undefined): boolean {
  return Boolean(image && typeof image.filename === "string");
}
