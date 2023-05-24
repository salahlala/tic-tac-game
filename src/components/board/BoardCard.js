import classes from "./BoardCard.module.css";
import Oicon from "../icons/Oicon";
import Xicon from "../icons/Xicon";
import { GameContext } from "../../context/GameContext";
import { useContext, useState } from "react";
const BoardCard = ({ index, user, active, activeBtn }) => {
  const { handleSquaresClick, stopClick, xnext, playMode, activeUser } =
    useContext(GameContext);
  const [isHover, setIsHover] = useState(false);
  const handleMouseEnter = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };
  const disableHoverCpu = () => {
    if (activeUser === "x") {
      if (isHover === true && !xnext) {
        return (
          <Xicon
            size={"true"}
            hovClass="true"
            color="none"
            strokeWidth="2"
            stroke="#31C3BD"
          />
        );
      } else {
        return null;
      }
    }
    if (activeUser === "o") {
      if (isHover && xnext) {
        return (
          <Oicon
            size={"true"}
            hovClass="true"
            color="none"
            strokeWidth="2"
            stroke="#F2B137"
          />
        );
      } else {
        return null;
      }
    }
  };
  const handleHoverIcons = () => {
    if (isHover && !xnext) {
      return (
        <Xicon
          size={"true"}
          hovClass="true"
          color="none"
          strokeWidth="2"
          stroke="#31C3BD"
        />
      );
    }

    if (isHover && xnext) {
      return (
        <Oicon
          size={"true"}
          hovClass="true"
          color="none"
          strokeWidth="2"
          stroke="#F2B137"
        />
      );
    }
  };
  return (
    <button
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`${active && user === "x" && classes["shadow-blue"]} ${
        active && user === "o" && classes["shadow-yellow"]
      } ${active ? classes.active : classes.card} ${
        activeBtn && classes.activeBtn
      } ${stopClick && classes.stopClick}`}
      onClick={() => {
        handleSquaresClick(index);
        handleMouseLeave();
      }}
    >
      {user === "x" && (
        <Xicon
          classActive={"true"}
          size={"true"}
          color={active ? "#1F3641" : "#31C3BD "}
        />
      )}
      {user === "o" && (
        <Oicon
          classActive={"true"}
          size={"true"}
          color={active ? "#1F3641" : "#F2B137 "}
        />
      )}
      {playMode === "cpu" ? disableHoverCpu() : handleHoverIcons()}
    </button>
  );
};

export default BoardCard;
