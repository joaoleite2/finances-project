import styled from "styled-components";

export const TableDiv = styled.div`
  margin-top: 1.5rem;
  height: 75vh;
  width: 100%;
  overflow-y: auto;
  border-radius: 10px;

  &::-webkit-scrollbar {
  width:.1rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #3B3B3B;
    border-radius: 1rem;
  }
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
  background-color: #1e1e1e;
  color: white;
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

export const ButtonCreate = styled.div`
  cursor: pointer;
  color:#fff;
  background-color: #1e1e1e;
  display: flex;
  align-items: center;
  padding: 1rem 5rem;
  justify-content: center;
  gap: .5rem;
  font-size: 1.3rem;
  font-weight: 600;
  border-radius: 5rem;
  width: fit-content;
  margin: 2rem;
`