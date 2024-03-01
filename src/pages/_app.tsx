import "@/styles/globals.css";
import Header, { defaultSEOConfig } from "@/utils/seoConfig";
import { DefaultSeo } from "next-seo";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <>
      <div className="dark">
      <Header />
      <DefaultSeo {...defaultSEOConfig} />
    <div>{<Component {...pageProps} />}</div>
    </div>
  </>;
}
