import React from 'react';
import type { PropsWithChildren } from 'react';

import SEO from '../components/SEO';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Layout({ children }: PropsWithChildren<{}>) {
  return (
    <>
      <SEO />
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="mb-10 md:mb-16" />
        <main className="w-screen flex-1">{children}</main>
        <div className="mb-10 md:mb-16" />
        <Footer />
      </div>
    </>
  );
}

export default Layout;
