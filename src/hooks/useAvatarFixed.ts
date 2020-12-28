import { graphql, useStaticQuery } from 'gatsby';
import type { GatsbyImageFixedProps } from 'gatsby-image';

function useAvatarFixed() {
  const data = useStaticQuery<{
    file: {
      childImageSharp: GatsbyImageFixedProps;
    };
  }>(graphql`
    query AvatarQuery {
      file(absolutePath: { regex: "/avatar.png/" }) {
        childImageSharp {
          fixed(width: 64, height: 64) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return data.file.childImageSharp.fixed;
}

export default useAvatarFixed;
