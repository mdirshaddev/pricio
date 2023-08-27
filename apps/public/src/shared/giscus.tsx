'use client';

// React Giscus
import Giscus from '@giscus/react';

// Next Themes
import { useTheme } from 'next-themes';

/**
 * The `GiscusCommentBox` component is a TypeScript React component that renders a comment box using
 * the Giscus library, allowing users to leave comments on a GitHub repository.
 */
export const GiscusCommentBox = () => {
  const { theme } = useTheme();
  return (
    <Giscus
      repo={`${process.env.NEXT_PUBLIC_GITHUB_USERNAME}/${process.env.NEXT_PUBLIC_GITHUB_REPONAME}`}
      repoId={process.env.NEXT_PUBLIC_GITHUB_REPO_ID}
      category='General'
      // categoryId='DIC_kwDOJ-tp784CYNjB'
      categoryId='DIC_kwDOKMA4Es4CY5LA'
      strict='1'
      mapping='pathname'
      inputPosition={'top'}
      theme={theme}
      lang={'en'}
      loading='lazy'
      emitMetadata='1'
      reactionsEnabled='1'
    />
  );
};
