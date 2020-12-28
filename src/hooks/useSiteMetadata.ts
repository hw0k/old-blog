import { graphql, useStaticQuery } from 'gatsby';

function useSiteMetadata() {
  const {
    site: { siteMetadata },
  } = useStaticQuery<{
    site: {
      siteMetadata: {
        title: string;
        description: string;
      };
    };
  }>(
    graphql`
      query SiteMetadataQuery {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `,
  );

  return siteMetadata;
}

export default useSiteMetadata;
