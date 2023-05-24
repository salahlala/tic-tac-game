import { createContext } from "react";
import { useState, useEffect } from "react";
import { CalcWinner } from "../helpers/CalcSquares";
import { useContext } from "react";
import { ModalContext } from "./ModalContext";
import { calcBestMove } from "../helpers/CalcSquares";
const GameContext = createContext();

const GameState = ({ children }) => {
  const [screen, setScreen] = useState("start");
  const [activeUser, setActiveUser] = useState("x");
  const [playMode, setPlayMode] = useState("");
  const [squares, setSquares] = useState(new Array(9).fill(""));
  const [xnext, setXnext] = useState(false);
  const [winner, setWinner] = useState(null);
  const [winnerLine, setWinnerLine] = useState(null);
  const [displayBtn, setDisplayBtn] = useState([]);
  const [stopClick, setStopClick] = useState(false);
  const [ties, setTies] = useState({ x: 0, o: 0 });
  const { showModal, setModalMode, hideModal } = useContext(ModalContext);

  const changePlayMode = (mode) => {
    setPlayMode(mode);
    setScreen("game");
  };

  useEffect(() => {
    const currentUser = xnext ? "o" : "x";

    if (playMode === "cpu" && currentUser !== activeUser && !winner) {
      cpuNextMove(squares);
    }
    checkNoWinner();
    // eslint-disable-next-line no-use-before-define, react-hooks/exhaustive-deps
  }, [screen, xnext, winner]);

  const handleSquaresClick = (ix) => {
    if (squares[ix] || winner) {
      return;
    }
    let currentUser = xnext ? "o" : "x";
    if (playMode === "cpu" && currentUser !== activeUser) {
      return;
    }

    let copySquares = [...squares];
    copySquares[ix] = !xnext ? "x" : "o";

    setSquares(copySquares);

    setXnext(!xnext);
    setDisplayBtn([...displayBtn, ix]);

    checkWinner(copySquares);
  };

  const checkWinner = (sq, cpu) => {
    const isWinner = CalcWinner(sq, activeUser === "x" ? "o" : "x");
    if (isWinner) {
      setWinner(isWinner.winner);
      setWinnerLine(isWinner.line);
      const copTies = { ...ties };
      copTies[isWinner.winner] += 1;
      setTies(copTies);

      showModal();
      setModalMode("winner");
    }
  };

  const checkNoWinner = () => {
    const moves = squares.filter((sq) => sq === "");
    const checkWin = CalcWinner(squares);
    if (checkWin) {
      return;
    }
    if (moves.length === 0) {
      setWinner("draw");
      showModal();
      setModalMode("winner");
    }
  };

  const handleNextRound = () => {
    setSquares(new Array(9).fill(""));
    setWinner(null);
    setWinnerLine(null);
    setXnext(false);
    setDisplayBtn([]);
    hideModal();
  };

  const handleReset = () => {
    setSquares(new Array(9).fill(""));
    setXnext(false);
    setWinner(null);
    setWinnerLine(null);
    setActiveUser("x");
    setTies({ x: 0, o: 0 });
    setDisplayBtn([]);

    hideModal();
    setScreen("start");
  };

  const cpuNextMove = (squares) => {
    let betMove = calcBestMove(
      squares,
      activeUser === "x" ? "o" : "x",
      activeUser === "x" ? "x" : "o"
    );
    let copSquares = [...squares];
    copSquares[betMove] = !xnext ? "x" : "o";
    setTimeout(() => {
      setSquares(copSquares);
      setDisplayBtn([...displayBtn, betMove]);
      setStopClick(true);
      setXnext(!xnext);
    }, 750);
    setTimeout(() => {
      setStopClick(false);
    }, 900);

    checkWinner(copSquares);
  };

  return (
    <GameContext.Provider
      value={{
        screen,
        activeUser,
        playMode,
        setActiveUser,
        changePlayMode,
        squares,
        handleSquaresClick,
        winnerLine,
        winner,
        xnext,
        handleReset,
        handleNextRound,
        ties,
        displayBtn,
        stopClick,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export { GameState, GameContext };
