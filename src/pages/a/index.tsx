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
    getData()
  },[])
  return (
    <>
        <Head>
        <meta property="og:title" content={seoProps.title} />
        <meta property="og:description" content={seoProps.description} />
      </Head>
        {/* <NextSeo
          title={seoProps.title}
          description={seoProps.description}
          canonical={seoProps.canonical}
          openGraph={seoProps.openGraph}
          // 其他可能的 NextSeo 配置项
        /> */}
    
      <p>SEO Added to Page B</p>
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
