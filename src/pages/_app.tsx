import React from "react";
import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";

//RecoilRootで囲む
const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <RecoilRoot>
      <Component {...pageProps} />
    </RecoilRoot>
  );
};

export default MyApp;
