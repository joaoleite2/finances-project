import React, { useContext } from "react";
import { ButtonCreate, ButtonText, HeaderDiv, TextHeader } from "./style";
import { FaPlus } from "react-icons/fa";
import { ModalContext } from "../../contexts/ModalContext";

interface HeaderPropsType{
  pageTitle:string;
}

const Header:React.FC<HeaderPropsType> = ({pageTitle}:HeaderPropsType) => {
  const { setActivedModal, setModalSection } = useContext(ModalContext);

  const handleClickOnCreate = () => {
    setActivedModal(true)
    setModalSection('createParams');
  }
  
  return(
    <HeaderDiv>
      <TextHeader>{pageTitle}</TextHeader>
      <ButtonCreate onClick={() => handleClickOnCreate()}>
        <ButtonText>
          Create
        </ButtonText>
        <FaPlus />
      </ButtonCreate>
    </HeaderDiv>
  )
}

export default Header;