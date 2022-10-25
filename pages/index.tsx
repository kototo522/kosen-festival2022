import type { NextPage } from "next";
import { useState } from "react";
import { useRouter } from "next/router";
import { css } from "@emotion/react";

const color = css`
  color: red;
`;

const Home: NextPage = () => {
  const router = useRouter();
  const [count, setCount] = useState(0);

  const increment = () => {
    if (count >= 4) {
      alert("このゲームは4人までプレイ可能です");
      setCount(count);
    } else {
      setCount(count + 1);
    }
  };

  const decrement = () => {
    if (count <= 0) {
      alert("正しい人数を入力してください");
      setCount(count);
    } else {
      setCount(count - 1);
    }
  };

  const submit = () => {
    router.push({
      pathname: "./game",
      query: { numberOfPlayer: count }
    });
  };

  return (
    <div>
      <h1>高専生の人生ゲーム</h1>
      <p>プレイ人数選択</p>
      <h1>{count}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={submit}>スタート</button>
    </div>
  );
};

export default Home;
