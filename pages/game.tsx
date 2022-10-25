import type { NextPage } from "next";
import { useState } from "react";
import { useRouter } from "next/router";
import { css } from "@emotion/react";

const color = css`
  color: red;
`;

const container = css`
  display: flex;
`;

const Game: NextPage = () => {
  const router = useRouter();
  const [numberOfPlayer, setNumberOfPlayer] = useState(
    router.query.numberOfPlayer
  );
  return (
    <div>
      <p>{numberOfPlayer}</p>
    </div>
  );
};

export default Game;
