import dynamic from "next/dynamic";
import type { ComponentMap } from "@/configs/types";

export const componentMap: ComponentMap = {
  imageSection: dynamic(() => import("@/components/sections/image-section")),
  cardsSection: dynamic(() => import("@/components/sections/cards-section")),
  servicesSection: dynamic(
    () => import("@/components/sections/services-section"),
  ),
  spacer: dynamic(() => import("@/components/sections/spacer")),
  imagesCarousel: dynamic(
    () => import("@/components/sections/images-carousel"),
  ),
};

export default componentMap;
