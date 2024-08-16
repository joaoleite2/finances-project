import React, { useContext } from "react";
import { ModalContainer } from "./style";
import { ModalContext } from "../../contexts/ModalContext";

const CreateMovement:React.FC = () => {
  const { setActivedModal } = useContext(ModalContext)
  
  return(
    <ModalContainer>
      
      <button onClick={() => setActivedModal(false)}>teste</button>
    </ModalContainer>
  )
}

export default CreateMovement;