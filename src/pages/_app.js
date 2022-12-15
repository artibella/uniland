import { UniformContext } from "@uniformdev/context-react";
import { Context, enableContextDevTools } from "@uniformdev/context";
import manifest from "../lib/contextManifest.json";
import getConfig from "next/config";
import Layout from "../components/layout";
import Script from "next/script";
import * as gtag from "../lib/gtag";
import { useEffect } from "react";
import { useRouter } from "next/router";
import "../styles/globals.css";
import "../styles/page.css";
import { Html } from "next/document";
import Head from "next/head";

const {
  publicRuntimeConfig: { gtmStreamId },
} = getConfig();

const context = new Context({
  manifest,
  defaultConsent: true,
  plugins: [
    enableContextDevTools(),
  ]
});



function MyApp({ Component, pageProps, scoring }) {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  
  return (
    <>
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
        />
        <Script
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${gtag.GA_TRACKING_ID}', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />

      <Layout>
        <UniformContext context={context}>
          <Component {...pageProps} />
        </UniformContext>
      </Layout>
    </>
  );
}

export default MyApp;