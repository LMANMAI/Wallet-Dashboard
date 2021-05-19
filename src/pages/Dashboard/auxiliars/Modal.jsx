import React, { useRef, useCallback, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import { ModalView, ModalContent } from "../../../assets";
const Modal = ({ modal, setModal }) => {
  const modalRef = useRef();
  const animation = useSpring({
    config: {
      duration: 250,
    },
    opacity: modal ? 1 : 0,
    transform: modal ? "translateY(0%)" : "translateY(-100%)",
  });
  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setModal(false);
    }
  };
  const keyPress = useCallback(
    (e) => {
      if (e.key === "Escape" && modal) {
        setModal(false);
      }
    },
    [setModal, modal]
  );

  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);
  return (
    <>
      {modal ? (
        <ModalView ref={modalRef} onClick={(e) => closeModal(e)}>
          <animated.div style={animation}>
            <ModalContent>
              modal
              <button onClick={() => setModal()}>cerrar X</button>
            </ModalContent>
          </animated.div>
        </ModalView>
      ) : null}
    </>
  );
};

export default Modal;
