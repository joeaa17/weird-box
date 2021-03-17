import { useEffect, useState } from "react";
import { SOCKET_EVENT } from "../../../../../shared/src/@enums";
import { CardInfo } from "../../../../../shared/src/@types";
import socket from "../../../services/socket";
import { centerizeStyle } from "../../../styles";
import Card from "../Card";
import { useGameContext } from "../context";
import BoxOfCard from "./BoxOfCard";
import ChargePointBar from "./ChargePointBar";
import { cardPlayedAnimation, gameBoardStyle } from "./styles";

const GameBoard = (): JSX.Element => {
  const [playedCard, setPlayedCard] = useState<CardInfo>();
  const { finishTurn } = useGameContext();

  const showPlayedCard = (card: CardInfo) => {
    finishTurn();
    setPlayedCard(card);
  };

  useEffect(() => {
    socket.on(SOCKET_EVENT.CardPlayed, showPlayedCard);
    return () => void socket.off(SOCKET_EVENT.CardPlayed);
  }, []);

  return (
    <div css={gameBoardStyle}>
      <BoxOfCard />
      <ChargePointBar />
      {playedCard && (
        <div onAnimationEnd={() => setPlayedCard(undefined)} css={[cardPlayedAnimation, centerizeStyle]}>
          <Card card={playedCard} />
        </div>
      )}
    </div>
  );
};

export default GameBoard;