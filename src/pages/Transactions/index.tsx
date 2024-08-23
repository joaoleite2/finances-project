import React, { useContext, useRef } from "react";
import Header from "../../components/Headers";
import { Container } from "../global-styles";
import { ButtonCreate, HeaderItem, HeaderRow, Table, TableCell, TableDiv, TableRow, TipDiv, TipText } from "./style";
import { exibedDataMethod, exibedDataType, headerTable } from "./utils";
import HeaderTransaction from "./Header";
import { DashboardContext } from "../../contexts/DashboardContext";
import nothing from "../../assets/un-draw/nothing.svg";
import { FaPlus } from "react-icons/fa";
import { ModalContext } from "../../contexts/ModalContext";

const TransactionsPage:React.FC = () => {
  const { movements } = useContext(DashboardContext);
  const tableRef = useRef(null);
  const { setActivedModal, setModalSection } = useContext(ModalContext);

  const handleClickOnCreate = () => {
    setActivedModal(true)
    setModalSection('createMovement');
  }
  
  return(
    <Container>
      <Header pageTitle="Movimentações" />
      <HeaderTransaction tableRef={tableRef}/>
        {movements.length>0 ? (
          <TableDiv>
            <Table ref={tableRef}>
              <thead>
                <HeaderRow>
                  {headerTable.map((item,index) => (
                    <HeaderItem key={index}>{item}</HeaderItem>
                  ))}
                </HeaderRow>
              </thead>
              <tbody>
                {movements.map((item,index)=> (
                  <TableRow key={index}>
                    <TableCell>{item.date}</TableCell>
                    <TableCell>R$ {item.value}</TableCell>
                    <TableCell>{item.name}</TableCell>
                    <TableCell>{exibedDataMethod[item.method]}</TableCell>
                    <TableCell>{exibedDataType[item.type]}</TableCell>
                  </TableRow>
                ))}
              </tbody>
            </Table>
          </TableDiv>
        ): (
          <TipDiv>
            <TipText>
              <h2>Não há movimentação</h2>
              <p>Para acompanhar suas movimentações monetárias em tabela, basta adicioná-las!</p>
              <ButtonCreate onClick={() => handleClickOnCreate()}><FaPlus />Criar</ButtonCreate>
            </TipText>
            <img src={nothing} draggable="false"/>
          </TipDiv>
        )}
    </Container>
  )
}

export default TransactionsPage;