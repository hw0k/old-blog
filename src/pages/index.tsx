import React from 'react';

import Layout from '../templates/Layout';
import PostItem from '../components/PostItem';

function HomePage() {
  return (
    <Layout>
      <div className="mx-auto px-6 container flex justify-center">
        <div className="w-screen max-w-lg flex flex-col space-y-10 md:space-y-16">
          <PostItem
            title="우리의 시력을 보호하는 방법"
            description="개발자는 살면서 대부분의 시간을 컴퓨터와 함께 보낸다. 이 포스트는 설명이 없기 때문에 본문을 truncate 처리하여 윗부분만 사용하고 있다. 그럼..."
          />
          <PostItem
            title="스크롤바 유무에 따라 너비가 변하는 현상 해결하기"
            description="스크롤바 유무에 따라 너비가 변하는 현상을 해결하는 여러 가지 방법 알아보기"
          />
          <PostItem title="6개의 새로운 소식이 있습니다. 확인을 위해..." description="주니어 개발자가 새로운 지식을 찾고 감탄하는 과정" />
          <PostItem
            title="Lorem ipsum dolor sit amet"
            description="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
          />
        </div>
      </div>
    </Layout>
  );
}

export default HomePage;
