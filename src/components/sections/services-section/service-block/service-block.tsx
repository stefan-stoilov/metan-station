import {
  storyblokEditable,
  type SbBlokData,
  type ISbRichtext,
} from "@storyblok/react/rsc";
import type { SbImage } from "@/configs/types";
import { render } from "storyblok-rich-text-react-renderer";
import { typography as t } from "@/components/ui/typography";
import Image from "next/image";

export type ServicesBlockProps = {
  component: "service";
  title: string;
  subtitle?: string;
  description: ISbRichtext;
  image?: SbImage;
} & SbBlokData;

export function ServiceBlock({
  title,
  subtitle,
  description,
  image,
  ...props
}: ServicesBlockProps) {
  return (
    <div className="flex flex-nowrap items-start gap-5">
      <div {...storyblokEditable(props)} className="flex w-8/12 flex-col gap-3">
        <p className={t.h2}>{title}</p>
        {subtitle && <p>{subtitle}</p>}
        {description && <div>{render(description)}</div>}
      </div>
      {image && (
        <div className="relative aspect-square w-4/12 flex-shrink-0 overflow-hidden rounded-[50%]">
          <Image
            src={image.filename}
            alt={image.alt}
            fill
            sizes="25vw"
            className="inset-0 object-cover"
          />
        </div>
      )}
    </div>
  );
}

export default ServiceBlock;
