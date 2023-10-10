// index.tsx
import { NextPage } from "next";
import { useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import counterState, { doubleCounterState } from "@/recoil/recoil";

const Home: NextPage = () => {
  const [count, setCount] = useRecoilState(counterState);
  const [incrementAmount, setIncrementAmount] = useState("2");
  // useRecoilValueでdoubleCounterStateを読み込む
  const doubledCount = useRecoilValue(doubleCounterState);

  return (
    <div>
      <p>{count}</p>
      <input
        value={incrementAmount}
        onChange={(e) => {
          setIncrementAmount(e.target.value);
        }}
      />
      <button
        onClick={() => {
          setCount((prev) => prev + 1);
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          setCount((prev) => prev - 1);
        }}
      >
        -
      </button>
      <button
        onClick={() => {
          setCount((prev) => prev + Number(incrementAmount));
        }}
      >
        追加
      </button>
      {/* ボタンクリック時にdoubleCounterStateを使い、countの2倍の値を表示する */}
      <button
        onClick={() => {
          setCount(doubledCount);
        }}
      >
        2倍
      </button>
      <button
        onClick={() => {
          setCount(0);
        }}
      >
        リセット
      </button>
    </div>
  );
};

export default Home;
