import React from "react";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { configureStore, createSlice } from "@reduxjs/toolkit";

//typeの定義
export type CounterState = {
  value: number;
};
//初期値の定義
const initialState: CounterState = {
  value: 0,
};

//sliceの定義
export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

//storeの定義
export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});

//providerで囲む
const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
};

export default MyApp;
