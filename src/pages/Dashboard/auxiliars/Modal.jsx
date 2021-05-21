import React, { useRef, useCallback, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import {
  ModalView,
  ModalContent,
  ModalCloseButton,
  FormularioModal,
  InputContainerModal,
  InputModal,
  Icon,
  ButtonModal,
} from "../../../assets";
import { GrClose } from "react-icons/gr";
const Modal = ({ modal, setModal }) => {
  const modalRef = useRef();
  const animation = useSpring({
    config: {
      duration: 350,
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
              <ModalCloseButton onClick={() => setModal()}>
                <GrClose />
              </ModalCloseButton>
              <div>
                <Icon>
                  <img src="/assets/debit-card.png" alt="card-icon" />
                </Icon>
                <h4>Datos para solicitar la tarjeta</h4>
                <FormularioModal>
                  <InputContainerModal>
                    <InputModal type="text" placeholder="Nombre" />
                    <InputModal type="text" placeholder="Apellido" />
                    <InputModal
                      type="number"
                      placeholder="Ingresos Mensuales"
                    />
                  </InputContainerModal>
                </FormularioModal>
                <ButtonModal>Solicitar</ButtonModal>
              </div>
            </ModalContent>
          </animated.div>
        </ModalView>
      ) : null}
    </>
  );
};

export default Modal;
