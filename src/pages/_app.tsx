import React from "react";
import type { AppProps } from "next/app";
import { createContext, useState } from "react";

type CountContextType = {
  count: number;
  setCount: (value: number) => void;
};

//グローバルなstateをcreateContextで作成
export const CountContext = createContext<CountContextType>({
  count: 0,
  setCount: () => {},
});

//providerで囲む
const MyApp = ({ Component, pageProps }: AppProps) => {
  const [count, setCount] = useState(0);

  return (
    <CountContext.Provider value={{ count, setCount }}>
      <Component {...pageProps} />
    </CountContext.Provider>
  );
};

export default MyApp;
