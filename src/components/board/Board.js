import classes from "./Borard.module.css";
import Xicon from "../icons/Xicon";
import Oicon from "../icons/Oicon";
import BoardCard from "./BoardCard";
import { GameContext } from "../../context/GameContext";
import { ModalContext } from "../../context/ModalContext";
import { useContext } from "react";
const Board = () => {
  const {
    squares,
    xnext,
    winner,
    winnerLine,
    ties,
    displayBtn,
    playMode,
    activeUser,
  } = useContext(GameContext);
  const { showModal, setModalMode } = useContext(ModalContext);
  const handleRestart = () => {
    setModalMode("start");
    showModal();
  };

  const checkUser = (user) => {
    if (playMode === "cpu") {
      if (user === activeUser) {
        return "you";
      } else {
        return "cpu";
      }
    }
  };

  return (
    <div className={classes["main-board"]}>
      <div className={classes["board-header"]}>
        <div className={classes.icons}>
          <Xicon color="#31C3BD" />
          <Oicon color="#F2B137" />
        </div>

        <div className={classes.turn}>
          {!xnext ? (
            <Xicon color="#A8BFC9" classActive={"true"} />
          ) : (
            <Oicon color="#A8BFC9" classActive={"true"} />
          )}
          Turn
        </div>
        <button className={classes.restart} onClick={handleRestart}>
          Restart
        </button>
      </div>

      <div className={classes["board-body"]}>
        {squares.map((sq, ix) => (
          <BoardCard
            index={ix}
            key={ix}
            user={sq}
            active={winner && winnerLine && winnerLine.includes(ix)}
            activeBtn={displayBtn && displayBtn.includes(ix)}
          />
        ))}
      </div>
      <div className={classes["board-footer"]}>
        <div className={classes["p-result"]}>
          <p>X {checkUser("x")}</p> {ties.x}
        </div>
        <div className={classes.ties}>
          <p>Ties</p>
          {ties.x + ties.o}
        </div>
        <div className={classes["cp-result"]}>
          <p>O {checkUser("o")}</p>
          {ties.o}
        </div>
      </div>
    </div>
  );
};

export default Board;
