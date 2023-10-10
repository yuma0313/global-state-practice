import { atom, selector } from "recoil";

//atomの作成
const counterState = atom({
  key: "counterState",
  default: 0,
});

//atomの値を2倍にして返すselectorの作成
export const doubleCounterState = selector({
  key: "doubleCounterState",
  get: ({ get }) => {
    const count = get(counterState);
    return count * 2;
  },
});

export default counterState;
