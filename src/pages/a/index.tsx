import { NextSeo } from 'next-seo';
import Head from 'next/head';
import { FC, useEffect, useState } from 'react';
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
interface PageProps {
  seoProps: SeoProps;
}
const Page: FC<PageProps> = () => {
  const [seoProps, setSeoProps] = useState<SeoProps>({  title: '',
  description: '',
  canonical: '',
  openGraph: {
    url: '',
    title: '',
    description: '',
    images:[ {
      url: '',
      alt: ''
    }],
    siteName: ''
  }})

   async function getData() {
  // 模拟异步操作，实际中根据需要获取数据
  await new Promise((resolve) => setTimeout(resolve, 2000));

  // 返回页面所需数据
  const seoPropsData = {
    title: 'Holoworld AI- Chat B',
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
setSeoProps(seoPropsData)
 
}
  useEffect(() => { 
    // getData()
    // 在页面加载时设置OG标签
    const ogTitle = '动态标题';
    const ogDescription = '动态描述';
    const ogImage = '链接到动态图像';

    // 查找已有的OG标签并更新它们，或者创建新的OG标签
    const updateOGTag = (property: string, content: string) => {
      let ogTag = document.querySelector(`meta[property="og:${property}"]`);
      if (ogTag) {
        // 如果已存在，则更新内容
        ogTag.setAttribute('content', content);
      } else {
        // 如果不存在，则创建新的OG标签
        ogTag = document.createElement('meta');
        ogTag.setAttribute('property', `og:${property}`);
        ogTag.setAttribute('content', content);
        document.head.appendChild(ogTag);
      }
    };

    // 更新或创建OG标签
    updateOGTag('title', ogTitle);
    updateOGTag('description', ogDescription);
    updateOGTag('image', ogImage);

  },[])
  return (
    <>
      
        {/* <NextSeo
          title={seoProps.title}
          description={seoProps.description}
          canonical={seoProps.canonical}
          openGraph={seoProps.openGraph}
          // 其他可能的 NextSeo 配置项
        /> */}
    
      <p>SEO Added to Page A</p>
    </>
  );
};

// export async function getServerSideProps() {
//   // 模拟异步操作，实际中根据需要获取数据
//   await new Promise((resolve) => setTimeout(resolve, 2000));

//   // 返回页面所需数据
//   const seoProps = {
//     title: 'Holoworld AI- Chat B',
//     description: 'Your description here',
//     canonical: 'Your canonical URL here',
//     openGraph: {
//       url: 'Your Open Graph URL here',
//       title: 'Your Open Graph Title',
//       description: 'Your Open Graph Description',
//       images: [
//         {
//           url: '/images/test.png',
//           alt: 'Your image alt text here',
//         },
//       ],
//       siteName: 'Your Site Name',
//     },
//   };

//   return {
//     props: {
//       seoProps,
//     },
//   };
// }

export default Page;
