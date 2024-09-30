import dynamic from "next/dynamic";
import type { ComponentMap } from "@/configs/types";

export const componentMap: ComponentMap = {
  teaser: dynamic(() => import("@/components/Teaser")),
  imageSection: dynamic(() => import("@/components/sections/image-section")),
  cardsSection: dynamic(() => import("@/components/sections/cards-section")),
  servicesSection: dynamic(
    () => import("@/components/sections/services-section"),
  ),
  spacer: dynamic(() => import("@/components/sections/spacer")),
};

export default componentMap;
