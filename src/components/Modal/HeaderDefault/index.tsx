import React, { useContext } from "react";
import { ClosedModal, HeaderTop, TipHeader, TitleHeader } from "./style";
import { GrFormClose } from "react-icons/gr";
import { ModalContext } from "../../../contexts/ModalContext";

interface PropsType {
  title:string;
  tip:string
}

const ModalHeaderDefault:React.FC<PropsType> = ({ title,tip } : PropsType) =>{
  const { setActivedModal } = useContext(ModalContext)

  return(
    <>
    <ClosedModal onClick={() => setActivedModal(false)}>
      <GrFormClose/>
    </ClosedModal>
    <HeaderTop>
      <TitleHeader>
        {title}
      </TitleHeader>
      <TipHeader>
        {tip}
      </TipHeader>
    </HeaderTop>
    </>
  )
}

export default ModalHeaderDefault;