import { SOCKET_EVENT } from "../../../shared/src/@enums";
import { CardInfo } from "../../../shared/src/@types";
import socket from "../services/socket";
import appState from "./app";
import boxOfCardState from "./boxOfCard";
import gameState from "./game";
import handState from "./hand";

socket.on(SOCKET_EVENT.TakeCard, (cards: CardInfo[]) => {
  boxOfCardState.getState().deal();
  handState.setState({ cards: [...handState.getState().cards, ...cards] });
});

export { appState, gameState, handState, boxOfCardState };
