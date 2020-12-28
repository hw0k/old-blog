import React from 'react';
import { Link } from 'gatsby';
import Image from 'gatsby-image';
import type { GatsbyImageFluidProps } from 'gatsby-image';

interface Props {
  to: string;
  thumbnailFluid: GatsbyImageFluidProps['fluid'];
  title: string;
  description: string;
  date: string;
}

// TODO(hw0k): Partial<Props> -> Props, img -> Image, 쿼리 작성한 후 변경
function PostItem({ to, thumbnailFluid, title, description, date }: Partial<Props>) {
  return (
    <Link className="post-item" to={to ?? '/'}>
      <div className="mb-4 w-full relative h-40 md:h-60 rounded-lg overflow-hidden">
        <div className="overlay" />
        <img
          className="w-full h-40 md:h-60 object-cover rounded-lg"
          src="https://www.talkwalker.com/images/2020/blog-headers/image-analysis.png"
          alt="thumbnail"
        />
        {/* <Image fluid={thumbnailFluid} className="w-full h-40 md:h-60 object-cover rounded-lg" alt="thumbnail" /> */}
      </div>
      <h3 className="mb-2 text-xl md:text-2xl font-bold">{title}</h3>
      <p className="mb-2">{description}</p>
      <small className="text-sm text-gray-500">{date}</small>
    </Link>
  );
}

export default PostItem;
