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
    <meta name="twitter:card" content="summary" />
<meta name="twitter:site" content="@nytimesbits" />
<meta name="twitter:creator" content="@nickbilton" />
<meta property="og:url" content="http://bits.blogs.nytimes.com/2011/12/08/a-twitter-for-my-sister/" />
<meta property="og:title" content="我姐姐的推特" />
<meta property="og:description" content="早期，Twitter 发展得如此之快，以至于几乎不可能添加新功能，因为工程师们花了大量时间试图防止火箭飞船失速。" />
<meta property="og:image" content="http://graphics8.nytimes.com/images/2011/12/08/technology/bits-newtwitter/bits-newtwitter-tmagArticle.jpg" />
      </Head>
    </>
  );
};

export default Header;
