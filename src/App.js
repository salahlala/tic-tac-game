import Start from "./components/start/Start";
import Board from "./components/board/Board";
import Modal from "./components/modal/start/Modal";
import { GameContext } from "./context/GameContext";
import { useContext } from "react";

function App() {
  const { screen } = useContext(GameContext);
  return (
    <>
      {screen === "start" && <Start />}
      {screen === "game" && <Board />}
      <Modal />
    </>
  );
}

export default App;
