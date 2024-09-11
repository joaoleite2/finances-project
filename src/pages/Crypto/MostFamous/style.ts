import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap:.5rem;
`

export const ContainerCoin = styled.div`
  border-radius: 1rem;
  border: 1px solid #E1E1E2;
  display: flex;
  align-items: center;
  justify-content: start;
  padding: .5rem 2rem;
  gap:.5rem;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  cursor: pointer;
  transition: transform .2s ease;

  img{
    width: 2rem;
  }

  &:hover{
    transform: scale(1.1);
  }
`