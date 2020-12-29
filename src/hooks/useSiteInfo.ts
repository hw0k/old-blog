import { graphql, useStaticQuery } from 'gatsby';

function useSiteInfo() {
  const site = useStaticQuery<{
    site: {
      siteMetadata: {
        title: string;
        description: string;
      };
    };
    file: {
      publicURL: string;
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
        file(absolutePath: { regex: "/default-og-image.png/" }) {
          publicURL
        }
      }
    `,
  );

  return site;
}

export default useSiteInfo;
