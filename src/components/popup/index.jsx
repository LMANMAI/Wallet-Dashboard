import React, { useRef, useCallback, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import { ModalView, ModalContent, ModalCloseButton } from "../../assets";
import { GrClose } from "react-icons/gr";
const Popup = ({ open, setClose, children }) => {
  const modalRef = useRef();

  const animation = useSpring({
    config: {
      duration: 25,
    },
    opacity: open ? 1 : 0,
    transform: open ? "scale(1)" : "scale(.8)",
    transition: "all 200ms",
  });
  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setClose();
    }
  };
  const keyPress = useCallback(
    (e) => {
      if (e.key === "Escape" && open) {
        setClose();
      }
    },
    [setClose, open]
  );
  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);
  return (
    <>
      {open ? (
        <>
          <ModalView ref={modalRef} onClick={(e) => closeModal(e)}>
            <animated.div style={animation}>
              <ModalContent>
                <ModalCloseButton onClick={() => setClose()}>
                  <GrClose />
                </ModalCloseButton>
                {children}
              </ModalContent>
            </animated.div>
          </ModalView>
        </>
      ) : null}
    </>
  );
};

export default Popup;
