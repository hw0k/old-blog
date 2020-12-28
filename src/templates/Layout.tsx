import React from 'react';
import type { PropsWithChildren } from 'react';

import Header from '../components/Header';
import SEO from '../components/SEO';

function Layout({ children }: PropsWithChildren<{}>) {
  return (
    <>
      <SEO />
      <div className="min-h-screen">
        <Header />
        <div className="mb-16" />
        {children}
      </div>
    </>
  );
}

export default Layout;
