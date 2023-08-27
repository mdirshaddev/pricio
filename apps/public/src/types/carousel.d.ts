import { UrlObject } from 'url';

export type CarouselContentProps = {
  index: number;
  title: string;
  subTitle?: string;
  description: string;
  category: string;
  imgSrc: string;
  alt: string;
  href: UrlObject | string;
};
