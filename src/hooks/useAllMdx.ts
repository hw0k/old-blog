import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImageFluidProps } from 'gatsby-image';

function useAllMdx() {
  const data = useStaticQuery<{
    allMdx: {
      edges: {
        node: {
          frontmatter: {
            title: string;
            description: string | null;
            date: string;
            featuredImage: {
              childImageSharp: GatsbyImageFluidProps;
            } | null;
            tags: string[];
          };
          fields: {
            slug: string;
          };
          excerpt: string;
        };
      }[];
    };
  }>(graphql`
    query AllPostsQuery {
      allMdx(sort: { fields: frontmatter___date, order: DESC }) {
        edges {
          node {
            frontmatter {
              title
              description
              date(formatString: "YYYY.MM.DD.")
              featuredImage {
                childImageSharp {
                  fluid(maxWidth: 640) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
              tags
            }
            fields {
              slug
            }
            excerpt(pruneLength: 100, truncate: true)
          }
        }
      }
    }
  `);

  return data.allMdx;
}

export default useAllMdx;
