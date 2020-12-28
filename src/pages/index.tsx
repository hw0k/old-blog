import React from 'react';

import Layout from '../templates/Layout';

function HomePage() {
  return (
    <Layout>
      <div>
        <div className="mx-auto container px-4">
          <div>포스트 리스트 헤더</div>
          <div>카테고리</div>
          <div>포스트</div>
        </div>
      </div>
    </Layout>
  );
}

export default HomePage;
