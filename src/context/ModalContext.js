import React from "react";
import { useState } from "react";
const ModalContext = React.createContext();

const ModalState = (props) => {
  const [show, setShow] = useState(false);
  const [mode, setMode] = useState("winner");

  const showModal = () => setShow(true);
  const hideModal = () => {
    setShow(false);
    setMode("nothing");
  };

  return (
    <ModalContext.Provider
      value={{
        show,
        showModal,
        hideModal,
        setModalMode: setMode,
        modalMode: mode,
      }}
    >
      {props.children}
    </ModalContext.Provider>
  );
};

export { ModalContext, ModalState };
