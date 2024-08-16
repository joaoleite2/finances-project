import React, { useContext } from "react";
import { ButtonCreate, ButtonText, HeaderDiv, TextHeader } from "./style";
import { FaPlus } from "react-icons/fa";
import { ModalContext } from "../../contexts/ModalContext";

const Header:React.FC = () => {
  const { setActivedModal, setModalSection } = useContext(ModalContext);

  const handleClickOnCreate = () => {
    setActivedModal(true)
    setModalSection('createParams');
  }
  
  return(
    <HeaderDiv onClick={() => handleClickOnCreate()}>
      <TextHeader>Dashboard</TextHeader>
      <ButtonCreate>
        <ButtonText>
          Create
        </ButtonText>
        <FaPlus />
      </ButtonCreate>
    </HeaderDiv>
  )
}

export default Header;