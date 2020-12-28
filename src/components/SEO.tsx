import React from 'react';
import { Helmet } from 'react-helmet';

import useSiteMetadata from '../hooks/useSiteMetadata';

type MetaProps = JSX.IntrinsicElements['meta'];

interface Props {
  title?: string;
  description?: string;
  lang?: string;
  meta?: MetaProps[];
}

function SEO({ title, description, lang = 'ko', meta = [] }: Props) {
  const siteMetadata = useSiteMetadata();

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
        ...meta,
      ]}
    />
  );
}

export default SEO;
