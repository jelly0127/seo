import { NextSeo } from 'next-seo';
import React, { useEffect, useState } from 'react';

interface SeoProps {
  title: string;
  description: string;
  canonical: string;
  openGraph: {
    url: string;
    title: string;
    description: string;
    images: {
      url: string;
      alt: string;
    }[];
    siteName: string;
  };
}

const Page: React.FC = () => {
  const [seoProps, setSeoProps] = useState<SeoProps | null>(null);

  useEffect(() => {
    // 模拟异步操作，延迟两秒钟
    const fetchData = async () => {
      // 假设您的实际数据获取逻辑在此
      // 这里只是设置了一个简单的示例数据
      const data: SeoProps = {
        title: 'Holoworld AI- Chat',
        description: 'Your description here',
        canonical: 'Your canonical URL here',
        openGraph: {
          url: 'Your Open Graph URL here',
          title: 'Your Open Graph Title',
          description: 'Your Open Graph Description',
          images: [
            {
              url: '/images/test.png',
              alt: 'Your image alt text here',
            },
          ],
          siteName: 'Your Site Name',
        },
      };

      // 模拟延迟两秒钟
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // 将获取的数据设置为 seoProps
      setSeoProps(data);
    };

    // 调用数据获取函数
    fetchData();
  }, []); // 空数组表示仅在组件挂载时执行一次

  return (
    <>
      {/* 使用条件渲染，只有在 seoProps 不为 null 时才渲染 NextSeo */}
      {seoProps !== null && (
        <NextSeo
          title={seoProps.title}
          description={seoProps.description}
          canonical={seoProps.canonical}
          openGraph={seoProps.openGraph}
          // 其他可能的 NextSeo 配置项
        />
      )}
      <p>SEO Added to Page</p>
    </>
  );
};

export default Page;
