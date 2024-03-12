import Head from 'next/head';

const titleDefault = 'Holoworld AI';
const urlDefault = 'https://holoworld.app';
const descriptionDefault =
  'Chat, play, and create with your favorite characters!';
const imageDefault = '/images/test.png';
const author = 'Hologram Labs';

export const defaultSEOConfig = {
  author: author,
  themeColor: '#000',
  title: titleDefault,
  description: descriptionDefault,
  canonical: urlDefault,
  openGraph: {
    type: 'website',
    url: urlDefault,
    title: titleDefault,
    description: descriptionDefault,
    images: [{ url: imageDefault, alt: titleDefault }],
  },
  twitter: {
    cardType: 'summary',
  },
};

const Header = () => {
  return (
    <>
      <Head>
          {/* Recommended Meta Tags */}
      <meta charSet="utf-8" />
      <meta name="language" content="english" />
      <meta httpEquiv="content-type" content="text/html" />
      <meta name="author" content={author} />
      <meta name="designer" content={author} />
      <meta name="publisher" content={author} />

      {/* Search Engine Optimization Meta Tags */}
      <title>{titleDefault}</title>
      <meta name="description" content={descriptionDefault} />
      <meta
        name="keywords"
        content="NFT,VTubing,3D,Content Creation,Virtual Avatar,Metaverse"
      />
      <meta name="robots" content="index,follow" />
      <meta name="distribution" content="web" />
      {/* 
      Facebook Open Graph meta tags
        documentation: https://developers.facebook.com/docs/sharing/opengraph */}
      <meta name="og:title" content={titleDefault} />
      <meta name="og:type" content="site" />
      <meta name="og:url" content={urlDefault} />
      <meta name="og:image" content={imageDefault} />
      <meta name="og:site_name" content={titleDefault} />
      <meta name="og:description" content={descriptionDefault} />

      <link rel="manifest" href="/manifest.json" />

      {/* Meta Tags for HTML pages on Mobile */}
      <meta name="format-detection" content="telephone=yes" />
      <meta name="HandheldFriendly" content="true" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
      />

      <meta name="theme-color" content="#000" />
      <link rel="shortcut icon" href="/icons/favicon.ico" />

      {/* 
      Twitter Summary card
        documentation: https://dev.twitter.com/cards/getting-started
        Be sure validate your Twitter card markup on the documentation site. */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={urlDefault} />
  
<meta name="twitter:site" content="@huntarosan" />
<meta name="twitter:title" content={titleDefault} />
<meta name="twitter:description" content={descriptionDefault} />
<meta name="twitter:image" content={imageDefault} />
   </Head>
    </>
  );
};

export default Header;
