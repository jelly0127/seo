import "@/styles/globals.css";
import { DefaultSeo } from "next-seo";
import type { AppProps } from "next/app";
const titleDefault = 'Holoworld AI';
const urlDefault = 'https://holoworld.app';
const descriptionDefault =
  'Chat, play, and create with your favorite characters!';
const imageDefault = '/icons/share.png';
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
export default function App({ Component, pageProps }: AppProps) {
  return <>
      <DefaultSeo {...defaultSEOConfig} />
  <Component {...pageProps} />
  </>;
}
