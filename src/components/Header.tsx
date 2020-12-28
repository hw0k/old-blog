import React from 'react';

import useSiteMetadata from '../hooks/useSiteMetadata';
import SiteNavigations from './SiteNavigations';

function Header() {
  const { description } = useSiteMetadata();

  return (
    <header className="pt-6 pb-12 md:pb-14 w-screen bg-gradient-to-br from-green-500 to-blue-500">
      <div className="px-6 hidden md:flex mx-auto container">
        <SiteNavigations />
      </div>
      <div className="mb-8" />
      <div className="px-6 mx-auto container flex flex-col justify-center items-center">
        <p className="text-2xl md:text-3xl text-white font-bold">hw0k&apos;s Tech Blog</p>
        <div className="mb-6" />
        <p className="text-md md:text-lg text-white text-center">{description}</p>
      </div>
    </header>
  );
}

export default Header;
