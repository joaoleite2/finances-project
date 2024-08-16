import styled from "styled-components";

export const HeaderTop = styled.div`
  top:1rem;
  width: 100%;
  text-align: center;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const TitleHeader = styled.h1`
  font-size: 1.5rem;
  color:#1e1e1e;
`

export const TipHeader = styled.p`
  margin-top: .3rem;
`

export const ClosedModal = styled.div`
  font-size: 2rem;
  color: #8f8f8f;
  border: solid #8f8f8f .1rem;
  display: flex;
  position: absolute;
  border-radius: 50%;  
  position: absolute;
  top:.5rem;
  right:.5rem;
  cursor: pointer;
  z-index: 5;
  padding: .5rem;
`