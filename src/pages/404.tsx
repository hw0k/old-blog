import React from 'react';
import { Link } from 'gatsby';

import Layout from '../templates/Layout';

function NotFoundPage() {
  return (
    <Layout>
      <div className="mx-auto px-6 container">
        <div className="text-5xl text-gray-800 text-center font-bold">앗!</div>
        <div className="mb-6" />
        <div className="text-base text-gray-800 text-center">
          <p>페이지를 찾지 못했어요.</p>
          <Link to="/" className="underline text-green-500">
            홈으로 돌아가볼까요?
          </Link>
        </div>
      </div>
    </Layout>
  );
}

export default NotFoundPage;
