import Xicon from "../../icons/Xicon";
import classes from "./Win.module.css";
import { useContext } from "react";
import { GameContext } from "../../../context/GameContext";
import Oicon from "../../icons/Oicon";
const Win = () => {
  const { winner, handleReset, handleNextRound, playMode, activeUser } =
    useContext(GameContext);

  let winText = "You Won!";
  if (playMode === "cpu") {
    if (winner === activeUser) {
      winText = "You Won!";
    } else {
      winText = "(CPU) Won!";
    }
  }
  return (
    <div className={classes.win}>
      {winner !== "draw" && <p>{winText}</p>}
      <div className={classes.msg}>
        {winner === "x" && <Xicon color={"#31C3BD "} />}
        {winner === "o" && <Oicon color={"#F2B137"} />}
        {winner === "draw" ? (
          <h3>Round tied</h3>
        ) : (
          <h3 className={winner === "x" ? classes.winX : classes.winO}>
            Takes the round
          </h3>
        )}
      </div>
      <div className={classes.btns}>
        <button className={classes.quit} onClick={handleReset}>
          Quit
        </button>
        <button onClick={handleNextRound}>Next Round</button>
      </div>
    </div>
  );
};

export default Win;
