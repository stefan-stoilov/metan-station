import type { ComponentType } from "react";
import type { TeaserProps } from "@/components/Teaser";
import type {
  ImageSectionProps,
  CardsSectionProps,
  ServicesSectionProps,
  SpacerProps,
} from "@/components/sections/types";

export type SbComponentProps =
  | TeaserProps
  | ImageSectionProps
  | CardsSectionProps
  | ServicesSectionProps
  | SpacerProps;

export type SbComponentKey = SbComponentProps["component"];

export type DynamicComponent = ComponentType<SbComponentProps>;

export type ComponentMap = Record<SbComponentKey, DynamicComponent>;

export type SbImage = {
  id: number;
  alt: string;
  name: string;
  focus: string;
  title: string;
  source: string;
  filename: string;
  copyright: string;
  fieldtype: "asset";
  meta_data: { alt: string; title: string; source: string; copyright: string };
  is_private: boolean;
  is_external_url: boolean;
};

export type SbPageProps = {
  story: {
    content: {
      body: SbComponentProps[];
    };
  };
};

export type SbPageResult = {
  data: SbPageProps;
  perPage: number;
  total: number;
  headers: Headers;
};
