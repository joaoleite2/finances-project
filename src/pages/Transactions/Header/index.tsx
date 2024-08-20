import React, { useContext } from "react";
import { FaPlus } from "react-icons/fa";
import { ModalContext } from "../../../contexts/ModalContext"; 
import { Button, ButtonsDiv, ButtonText, Header, HeaderFilter } from "./style";
import { PiFileCsvFill } from "react-icons/pi";
import { useDownloadExcel } from "react-export-table-to-excel";
import { TbAdjustments } from "react-icons/tb";

interface TableRefType{
  tableRef: {current?:string | null};
}

const HeaderTransaction:React.FC<TableRefType> = ({tableRef}:TableRefType) => {
  const { setActivedModal, setModalSection } = useContext(ModalContext);
  const { onDownload } = useDownloadExcel({
    currentTableRef:tableRef.current,
    filename: 'movements',
    sheet:'Movimentos'
  });

  const handleClickOnCreate = () => {
    setActivedModal(true)
    setModalSection('createParams');
  }
  
  return(
    <Header>
      <HeaderFilter>
        <TbAdjustments />
      </HeaderFilter>
      <ButtonsDiv>
        <Button onClick={onDownload} className="csv">
          <PiFileCsvFill className="shortIcon"/>
          <ButtonText>
            Exportar
          </ButtonText>
        </Button>
        <Button onClick={() => handleClickOnCreate()}>
          <FaPlus />
          <ButtonText>
            Criar
          </ButtonText>
        </Button>
      </ButtonsDiv>
    </Header>
  )
}

export default HeaderTransaction;