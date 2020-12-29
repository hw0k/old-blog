import React from 'react';
import { Helmet } from 'react-helmet';

import useSiteInfo from '../hooks/useSiteInfo';

type MetaProps = JSX.IntrinsicElements['meta'];

interface Props {
  title?: string;
  description?: string;
  lang?: string;
  meta?: MetaProps[];
  imageURL?: string;
}

function SEO({ title, description, lang = 'ko', imageURL, meta = [] }: Props) {
  const {
    site: { siteMetadata },
    file: { publicURL },
  } = useSiteInfo();

  const metaDescription = description ?? siteMetadata.description;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      defaultTitle={siteMetadata.title}
      titleTemplate={`%s | ${siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:image`,
          content: imageURL ?? publicURL,
        },
        ...meta,
      ]}
    />
  );
}

export default SEO;
