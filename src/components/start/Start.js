import Oicon from "../icons/Oicon";
import Xicon from "../icons/Xicon";
import classes from "./Start.module.css";
import { GameContext } from "../../context/GameContext";
import { useContext } from "react";
const Start = () => {
  const { activeUser, setActiveUser, changePlayMode } = useContext(GameContext);

  return (
    <div className={classes.start}>
      <div className={classes.icons}>
        <Xicon color="#31C3BD" />
        <Oicon color="#F2B137" />
      </div>
      <div className={classes["select-type"]}>
        <h2>PICK PLAYER 1'S MARK</h2>
        <div className={classes.btns}>
          <button
            onClick={() => {
              setActiveUser("x");
            }}
            className={`${activeUser === "x" && classes.active}`}
          >
            <Xicon className={classes.mark} />
          </button>
          <button
            onClick={() => {
              setActiveUser("o");
            }}
            className={`${activeUser === "o" && classes.active}`}
          >
            <Oicon className={classes.mark} />
          </button>
        </div>
        <p>REMEMBER: X GOES FIRST</p>
      </div>
      <div className={classes.actions}>
        <button
          onClick={() => {
            changePlayMode("cpu");
          }}
          className={classes.cpu}
        >
          new game (vs cpu)
        </button>
        <button
          onClick={() => {
            changePlayMode("user");
          }}
          className={classes.player}
        >
          new game (vs player)
        </button>
      </div>
    </div>
  );
};

export default Start;
