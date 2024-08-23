import React, { useContext, useRef } from "react";
import Header from "../../components/Headers";
import { Container } from "../global-styles";
import { HeaderItem, HeaderRow, Table, TableCell, TableDiv, TableRow } from "./style";
import { exibedDataMethod, exibedDataType, headerTable } from "./utils";
import HeaderTransaction from "./Header";
import { DashboardContext } from "../../contexts/DashboardContext";
import TipComponent from "../../components/TipsComponent";
import nothing from "../../assets/un-draw/nothing.svg";

const TransactionsPage:React.FC = () => {
  const { movements } = useContext(DashboardContext);
  const tableRef = useRef(null);
  
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
          <TipComponent
            image={nothing}
            title="Não há movimentação"
            paragraph="Para acompanhar suas movimentações monetárias em tabela, basta adicioná-las!"
          />
        )}
    </Container>
  )
}

export default TransactionsPage;