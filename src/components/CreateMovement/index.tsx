import React, { useContext } from "react";
import { CreateForm, InputDiv, InputLabel, Input, ModalContainer, ButtonsDiv, Buttons } from "./style";
import ModalHeaderDefault from "../Modal/HeaderDefault";
import { itemsForInput } from "./utils";
import { ModalContext } from "../../contexts/ModalContext";

const CreateMovement:React.FC = () => {  
  const { setActivedModal } = useContext(ModalContext)
  
  return(
    <ModalContainer>
      <ModalHeaderDefault title="Criar movimentação" tip="Insira os dados da nova movimentação" />
      <CreateForm>
        {itemsForInput.map((item) =>(
          <>
          <InputDiv>
            <InputLabel>{item.label}</InputLabel>
            <Input type={item.type} />
          </InputDiv>
          </>
        ))}
        <ButtonsDiv>
          <Buttons className="cancel" onClick={()=> setActivedModal(false)}>Cancelar</Buttons>
          <Buttons>Salvar</Buttons>
        </ButtonsDiv>
      </CreateForm>
    </ModalContainer>
  )
}

export default CreateMovement;