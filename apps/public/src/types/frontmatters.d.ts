import { ReadTimeResults } from 'reading-time';

export type BlogFrontmatter = {
  slug: string;
  title: string;
  description: string;
  banner: string;
  tags: string;
  repost?: string;
  readingTime: ReadTimeResults;
  wordCount: number;
  publishedAt: string;
  lastUpdated?: string;
};

export type ContentType = 'blog' | 'shelf' | 'projects';

export type PickFrontmatter<T extends ContentType> = T extends 'blog'
  ? BlogFrontmatter
  : T extends 'shelf'
  ? ShelfFrontmatter
  : ProjectFrontmatter;

export type InjectedMeta = { views?: number; likes?: number };

export type BlogType = {
  code: string;
  frontmatter: BlogFrontmatter;
};

export type ShelfFrontmatter = {
  slug: string;
  title: string;
  description: string;
  tags: string;
  readingTime: ReadTimeResults;
};

export type ShelfType = {
  code: string;
  frontmatter: ShelfFrontmatter;
};

export type ProjectFrontmatter = {
  slug: string;
  title: string;
  description: string;
  category?: string;
  banner: string;
  techs: string;
  link?: string;
  github?: string;
  youtube?: string;
  publishedAt: string;
  lastUpdated?: string;
};

export type ProjectType = {
  code: string;
  frontmatter: ProjectFrontmatter;
};

export type FrontmatterWithTags = BlogFrontmatter | ShelfFrontmatter;
export type FrontmatterWithDate = BlogFrontmatter | ProjectFrontmatter;
export type Frontmatter =
  | ProjectFrontmatter
  | BlogFrontmatter
  | ShelfFrontmatter;
