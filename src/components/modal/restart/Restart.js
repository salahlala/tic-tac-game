import classes from "./Restart.module.css";
import { GameContext } from "../../../context/GameContext";
import { ModalContext } from "../../../context/ModalContext";
import { useContext } from "react";
const Restart = () => {
  const { handleReset } = useContext(GameContext);
  const { hideModal } = useContext(ModalContext);
  return (
    <div className={classes.win}>
      <div className={classes.msg}>
        <h3>Restart Game ?</h3>
      </div>
      <div className={classes.btns}>
        <button className={classes.cancel} onClick={hideModal}>
          No,Cancel
        </button>
        <button onClick={handleReset}>Yes, Restart</button>
      </div>
    </div>
  );
};
export default Restart;
