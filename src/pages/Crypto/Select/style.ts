import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: fit-content;
  `

export const CryptoSelect = styled.div`
  font-size: .8rem;
  padding: 1rem 0;
  border: 1px solid #CECFCE;
  border-radius: 1rem;
  background-color: #EBEBEA;
  position: relative;
  cursor: pointer;
  display: flex;
  justify-content: center;
  width: 12rem;
  z-index: 2;
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
  top: 2.5rem;
  user-select: none;
  width: 100%;
  z-index: 1;
`

export const OptionItem = styled.li`
  padding: 1rem;
  text-align: center;
  color:#1e1e1e;
  font-size: .8rem;
  cursor: pointer;
  width: 100%;
  border-top: 1px solid #CECFCE;
  background-color:#fff;

  &:hover{
    background-color:#FAFAFA;
  }
`