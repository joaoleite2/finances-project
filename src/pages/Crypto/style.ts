import styled from "styled-components";

export const Section = styled.section`
  margin-top: 4rem;
`

export const SubHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 3rem;
  font-weight: 600;
  font-size: 1.2rem;
  gap: 1rem;
`

export const SearchDiv = styled.div`
  display: flex;
  width: fit-content;
  background-color: #EBEBEA;
  border: 1px solid rgba(0,0,0,.1);
`

export const SearchInput = styled.input`
  outline: none;
  box-sizing: border-box;
  padding: 0 1rem;
  border: none;
  background-color: #EBEBEA;
`

export const SearchIcon = styled.div`
  font-size: 1.5rem;
  color: #1e1e1e;
  height: 2.5rem;
  width: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-left: 1px solid rgba(0,0,0,.1);
  cursor: pointer;
`