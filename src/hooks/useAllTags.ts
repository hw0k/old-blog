import { graphql, useStaticQuery } from 'gatsby';

function useAllTags() {
  const data = useStaticQuery<{ allMdx: { allTags: string[] } }>(
    graphql`
      query AllTagQuery {
        allMdx {
          allTags: distinct(field: frontmatter___tags)
        }
      }
    `,
  );

  return data.allMdx.allTags;
}

export default useAllTags;
