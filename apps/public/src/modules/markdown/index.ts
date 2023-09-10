// Frontmatters Typing - ContentType
import type { ContentType } from 'src/types/frontmatters';

// Node path
import { join } from 'path';

// Node Filesystem
import { readFileSync } from 'fs';

// Reading time
import readingTime, { ReadTimeResults } from 'reading-time';

// MDX Bundler
import { bundleMDX } from 'mdx-bundler';

// Rehype plugins
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

// Gray matter
import matter from 'gray-matter';

/**
 * The function `getFileBySlug` is an asynchronous function that takes in a `type` and `slug` as
 * parameters and returns a promise that resolves to an object containing the `code` and `frontmatter`
 * of a file.
 * @param {ContentType} type - The `type` parameter represents the type of content you want to
 * retrieve. It could be a category or a specific type of content, such as "blog", "article", or
 * "news".
 * @param {string} slug - The `slug` parameter is a string that represents the unique identifier or
 * name of the file you want to retrieve. It is used to locate the file in the file system.
 * @returns The function `getFileBySlug` returns a promise that resolves to an object with two
 * properties: `code` and `frontmatter`. The `code` property is a string representing the content of
 * the file, and the `frontmatter` property is an object containing metadata about the file. The
 * `frontmatter` object has the following properties: `wordCount` (number), `readingTime`
 */
async function getFileBySlug(
  type: ContentType,
  slug: string
): Promise<{
  code: string;
  frontmatter: {
    wordCount: number;
    readingTime: ReadTimeResults;
    slug: string | null;
    [key: string]: any;
  };
}> {
  const source = slug
    ? readFileSync(
        join(process.cwd(), 'src', 'contents', type, `${slug}.mdx`),
        'utf8'
      )
    : readFileSync(
        join(process.cwd(), 'src', 'contents', `${type}.mdx`),
        'utf8'
      );

  const { code, frontmatter } = await bundleMDX({
    source,
    mdxOptions(options) {
      options.remarkPlugins = [...(options?.remarkPlugins ?? []), remarkGfm];
      options.rehypePlugins = [
        ...(options?.rehypePlugins ?? []),
        rehypeSlug,
        () =>
          rehypePrettyCode({
            theme: 'css-variables'
          }),
        [
          rehypeAutolinkHeadings,
          {
            properties: {
              className: ['hash-anchor']
            }
          }
        ]
      ];

      return options;
    }
  });

  return {
    code,
    frontmatter: {
      wordCount: source.split(/\s+/gu).length,
      readingTime: readingTime(source),
      slug: slug || null,
      ...frontmatter
    }
  };
}

export { getFileBySlug };
