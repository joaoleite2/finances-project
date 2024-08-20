import styled from "styled-components";

export const TableDiv = styled.div`
  margin-top: 4rem;
  height: 78vh;
  width: 100%;
  overflow-y: auto;
  border-radius: 10px;
`

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  border-radius: 2rem;

  th, td{
    padding: 1rem 2rem;
  }
`

export const HeaderRow = styled.tr`
  background-color: #f0f0f0;
  position: sticky;
  top: 0;
  z-index: 1;
`

export const HeaderItem = styled.th`
  text-align: start;
`

export const TableRow = styled.tr`
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
`

export const TableCell = styled.td`
  padding: 1rem 0;
`