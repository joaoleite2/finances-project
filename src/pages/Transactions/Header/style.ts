import styled from "styled-components"

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 3rem;
`

export const HeaderFilter = styled.div`
  font-size: 1.4rem;
  border-radius:50%;
  border: 1px solid rgba(0, 0, 0, 0.3);
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ButtonsDiv = styled.div`
  display: flex;
  gap: .5rem;
`

export const Button = styled.div`
  color:#fff;
  background-color: #1e1e1e;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: .8rem 1.2rem;
  border-radius: 2rem;
  gap:.5rem;
  cursor: pointer;

  &.csv{
    background-color: #fff;
    color: #1e1e1e;
    border: 1px solid #1e1e1e
  }

`

export const ButtonText = styled.h3`

`