import { useDispatch, useSelector } from "react-redux";
import { counterSlice, CounterState, store } from "./_app";
import { NextPage } from "next";
import { useState } from "react";

const Home: NextPage = () => {
  const dispatch = useDispatch();
  const selector = useSelector(
    (state: { counter: CounterState }) => state.counter
  );
  const { increment, decrement, incrementByAmount } = counterSlice.actions;

  const [incrementAmount, setIncrementAmount] = useState("2");

  return (
    <div>
      <p>{selector.value}</p>
      <input
        onChange={(e) => {
          setIncrementAmount(e.target.value);
        }}
      />
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        -
      </button>
      <button
        onClick={() => {
          dispatch(incrementByAmount(Number(incrementAmount))); //incrementAmountはstring型なのでNumber()で数値に変換
        }}
      >
        追加
      </button>
    </div>
  );
};

export default Home;
