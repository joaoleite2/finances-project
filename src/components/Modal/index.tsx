import React, { useContext } from "react";
import { ModalBackground } from "./style";
import { ModalContext } from "../../contexts/ModalContext";
import CreateMovement from "../CreateMovement";

const Modal: React.FC = () => {
  const { activedModal, modalSection } = useContext(ModalContext);
  return(
    <>
    {activedModal? (
      <ModalBackground>
        {modalSection === 'createParams' ? <CreateMovement /> : null}
      </ModalBackground>
    ) : null}
    </>
  )
}

export default Modal;