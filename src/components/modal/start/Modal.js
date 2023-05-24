import classes from "./Modal.module.css";
import { ModalContext } from "../../../context/ModalContext";
import { useContext } from "react";
import Win from "../win/Win";
import Restart from "../restart/Restart";
const Modal = () => {
  const { show, modalMode } = useContext(ModalContext);
  return (
    <div>
      <div
        className={`${classes.overlay} ${classes.active} ${
          !show && classes.close
        }`}
      >
        <div className={classes.content}>
          {/* <Win /> */}
          {modalMode === "winner" && <Win />}
          {modalMode === "start" && <Restart />}
        </div>
      </div>
    </div>
  );
};

export default Modal;
