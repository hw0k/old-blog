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
      <Link to={path}>
        <li className="hover:text-white">{name}</li>
      </Link>
    ),
    [],
  );

  return (
    <nav>
      <ul className="flex text-green-200 space-x-6">{navigations.map(renderNavigation)}</ul>
    </nav>
  );
}

export default SiteNavigations;
