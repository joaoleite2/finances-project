import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: fit-content;
`

export const CryptoSelect = styled.div`
  padding: 1rem 4rem;
  border: 1px solid #CECFCE;
  border-radius: 1rem;
  background-color: #EBEBEA;
  position: relative;
  cursor: pointer;
  display: flex;
  justify-content: center;
  width: fit-content;
  z-index: 1;
  user-select: none;
`

export const Options = styled.ul`
  position: absolute;
  list-style: none;
  font-weight: 400;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid #CECFCE;
  border-radius: 0 0 1rem 1rem;
  top: 3rem;
`

export const OptionItem = styled.li`
  padding: 1rem;
  text-align: center;
  color:#1e1e1e;
  font-size: .8rem;
  cursor: pointer;
  width: 100%;
  border-top: 1px solid #CECFCE;

  &:hover{
    background-color:#FAFAFA;
  }
`