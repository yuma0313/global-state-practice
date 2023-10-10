import { NextPage } from "next";
import { useContext, useState } from "react";
import { CountContext } from "./_app";

const Home: NextPage = () => {
  //useContextでグローバルなstateを取得
  const { count, setCount } = useContext(CountContext);
  const [incrementAmount, setIncrementAmount] = useState("0");

  return (
    <div>
      <p>{count}</p>
      <input
        onChange={(e) => {
          setIncrementAmount(e.target.value);
        }}
      />
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        -
      </button>
      <button
        onClick={() => {
          setCount(count + Number(incrementAmount));
        }}
      >
        追加
      </button>
      <button
        onClick={() => {
          setCount(count * 2);
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
