import React, { useCallback } from 'react';

import Layout from '../templates/Layout';

import PostItem from '../components/PostItem';

import useAllMdx from '../hooks/useAllMdx';

function HomePage() {
  const allMdx = useAllMdx();

  const renderPost = useCallback(
    ({
      node: {
        frontmatter: { title, description, date, featuredImage, tags },
        fields: { slug },
        excerpt,
      },
    }) => (
      <PostItem
        key={slug}
        title={title}
        description={description}
        date={date}
        thumbnailFluid={featuredImage?.childImageSharp?.fluid ?? null}
        tags={tags}
        to={slug}
        excerpt={excerpt}
      />
    ),
    [],
  );

  return (
    <Layout>
      <div className="mx-auto px-6 container flex justify-center">
        <div className="w-full max-w-screen-sm flex flex-col space-y-10 md:space-y-16">{allMdx.edges.map(renderPost)}</div>
      </div>
    </Layout>
  );
}

export default HomePage;
