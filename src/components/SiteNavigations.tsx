import React, { useCallback } from 'react';
import { Link } from 'gatsby';
import { OutboundLink } from 'gatsby-plugin-google-analytics';

const navigations = [
  {
    path: '/',
    name: '홈',
  },
  {
    path: 'https://www.linkedin.com/in/hw0k/',
    name: '소개',
    isOutboundLink: true,
  },
];

function SiteNavigations() {
  const renderNavigation = useCallback(({ path, name, isOutboundLink }: typeof navigations[number]) => {
    const item = <li className="hover:text-green-100">{name}</li>;
    const component = isOutboundLink ? (
      <OutboundLink key={path} href={path}>
        {item}
      </OutboundLink>
    ) : (
      <Link key={path} to={path} activeClassName="text-white">
        {item}
      </Link>
    );
    return component;
  }, []);

  return (
    <nav>
      <ul className="flex text-base text-green-200 space-x-6">{navigations.map(renderNavigation)}</ul>
    </nav>
  );
}

export default SiteNavigations;
