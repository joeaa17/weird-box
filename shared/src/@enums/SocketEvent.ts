enum SOCKET_EVENT {
  Error = "error",
  Info = "info",
  GetGameSettings = "get game settings",
  GetPlayerList = "get player list",
  TakeCard = "take card",
  PlayCard = "play card",
  CardPlayed = "card played",
  ConsumeCard = "consume card",
  ChargePointBarOvercharged = "charge point bar overcharged",
  HitPointChanged = "hit point changed",
  ChargePointChanged = "charge point changed",
  StartTurn = "start turn",
  TakeSpell = "take spell",
  FindGame = "find game",
  Connected = "connected",
  PlayerEliminated = "player eliminated",
  GameFound = "game found",
  RejectGame = "reject game",
  AcceptGame = "accept game",
  GameCanceled = "game canceled",
  NewGame = "new game",
  Ready = "ready",
  GameOver = "game over",
  LeaveGame = "leave game",
  PlayerLeftGame = "player left game",
  ActivatePassive = "activate passive",
  Disconnect = "disconnect",
  Rename = "rename",
}

export default SOCKET_EVENT;
