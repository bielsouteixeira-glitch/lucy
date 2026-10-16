"use client";
import {
  LOGO,
  DOG01,
  DOG02,
  PORTRAIT,
  ADDITIONAL,
  DOG01_THUMB,
  DOG02_THUMB,
  PORTRAIT_THUMB,
} from "@/generated/inline-images";

// Fotografias e logotipo embutidos no HTML (data URIs) para que apareçam
// no site publicado independentemente do upload da pasta /assets.
export const INLINE_IMAGES = {
  logo: LOGO,
  dog01: DOG01,
  dog02: DOG02,
  portrait: PORTRAIT,
  additional: ADDITIONAL,
  dog01Thumb: DOG01_THUMB,
  dog02Thumb: DOG02_THUMB,
  portraitThumb: PORTRAIT_THUMB,
} as const;

export type InlineImageId = keyof typeof INLINE_IMAGES;

type Props = Omit<React.ImgHTMLAttributes<HTMLImageElement>, "src"> & {
  id: InlineImageId;
};

export default function InlineImg({ id, alt = "", ...rest }: Props) {
  return <img src={INLINE_IMAGES[id]} alt={alt} {...rest} />;
}
