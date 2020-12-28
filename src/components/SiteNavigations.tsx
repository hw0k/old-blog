import React, { useCallback } from 'react';
import { Link } from 'gatsby';

const navigations = [
  {
    path: '/',
    name: '홈',
  },
  {
    path: '/about',
    name: '소개',
  },
];

function SiteNavigations() {
  const renderNavigation = useCallback(
    ({ path, name }: typeof navigations[number]) => (
      <Link key={path} to={path} activeClassName="text-white">
        <li className="hover:text-green-100">{name}</li>
      </Link>
    ),
    [],
  );

  return (
    <nav>
      <ul className="flex text-base text-green-200 space-x-6">{navigations.map(renderNavigation)}</ul>
    </nav>
  );
}

export default SiteNavigations;
