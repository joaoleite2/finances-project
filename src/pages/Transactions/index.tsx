import React from "react";
import Header from "../../components/Headers";
import { Container } from "../global-styles";
import { HeaderItem, HeaderRow, Table, TableCell, TableDiv, TableRow } from "./style";
import { headerTable } from "./utils";

const TransactionsPage:React.FC = () => {
  return(
    <Container>
      <Header pageTitle="Movimentações" />
        <TableDiv>
          <Table>
            <thead>
              <HeaderRow>
                {headerTable.map((item,index) => (
                  <HeaderItem key={index}>{item}</HeaderItem>
                ))}
              </HeaderRow>
            </thead>
            <tbody>
              {headerTable.map((item,index) => (
                <>
                  <TableRow key={index}>
                    <TableCell>{item}</TableCell>
                    <TableCell>{item}</TableCell>
                    <TableCell>{item}</TableCell>
                    <TableCell>{item}</TableCell>
                    <TableCell>{item}</TableCell>
                  </TableRow>
                  <TableRow key={index}>
                    <TableCell>{item}</TableCell>
                    <TableCell>{item}</TableCell>
                    <TableCell>{item}</TableCell>
                    <TableCell>{item}</TableCell>
                    <TableCell>{item}</TableCell>
                  </TableRow>
                  <TableRow key={index}>
                    <TableCell>{item}</TableCell>
                    <TableCell>{item}</TableCell>
                    <TableCell>{item}</TableCell>
                    <TableCell>{item}</TableCell>
                    <TableCell>{item}</TableCell>
                  </TableRow>
                  <TableRow key={index}>
                    <TableCell>{item}</TableCell>
                    <TableCell>{item}</TableCell>
                    <TableCell>{item}</TableCell>
                    <TableCell>{item}</TableCell>
                    <TableCell>{item}</TableCell>
                  </TableRow>
                  <TableRow key={index}>
                    <TableCell>{item}</TableCell>
                    <TableCell>{item}</TableCell>
                    <TableCell>{item}</TableCell>
                    <TableCell>{item}</TableCell>
                    <TableCell>{item}</TableCell>
                  </TableRow>
                  <TableRow key={index}>
                    <TableCell>{item}</TableCell>
                    <TableCell>{item}</TableCell>
                    <TableCell>{item}</TableCell>
                    <TableCell>{item}</TableCell>
                    <TableCell>{item}</TableCell>
                  </TableRow>
                  <TableRow key={index}>
                    <TableCell>{item}</TableCell>
                    <TableCell>{item}</TableCell>
                    <TableCell>{item}</TableCell>
                    <TableCell>{item}</TableCell>
                    <TableCell>{item}</TableCell>
                  </TableRow>
                </>
              ))}
            </tbody>
          </Table>
        </TableDiv>
    </Container>
  )
}

export default TransactionsPage;