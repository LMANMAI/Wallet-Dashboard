import React, { useRef, useCallback, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import { ModalView, ModalContent, ModalCloseButton } from "../../assets";
import { GrClose } from "react-icons/gr";
const Popup = ({ open, onClose, children }) => {
  const modalRef = useRef();

  const animation = useSpring({
    config: {
      duration: 50,
    },
    opacity: open ? 1 : 0,
    transform: open ? "scale(1)" : "scale(.7)",
    transition: "all 150ms",
  });
  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      onClose();
    }
  };
  const keyPress = useCallback(
    (e) => {
      if (e.key === "Escape" && open) {
        onClose();
      }
    },
    [onClose, open]
  );
  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);
  //if (!open) return null;
  return (
    <>
      {open ? (
        <>
          <ModalView ref={modalRef} onClick={(e) => closeModal(e)}>
            <animated.div style={animation}>
              <ModalContent>
                <ModalCloseButton onClick={() => onClose()}>
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
