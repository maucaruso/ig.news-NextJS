// @ts-nocheck
import { AppProps } from "next/app";
import { Header } from "../components/Header";
import { SessionProvider as NextAuthProvider } from "next-auth/react";

import "../styles/global.scss";

function MyApp({ Component, pageProps }: AppProps) {
  const AnyComponent = Component as any;
  
  return (
    <>
      <NextAuthProvider session={pageProps.session}>
        <>
          <Header />
          <AnyComponent {...pageProps} />
        </>
      </NextAuthProvider>
    </>
  );
}

export default MyApp;
