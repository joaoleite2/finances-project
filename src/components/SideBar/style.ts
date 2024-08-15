import styled from "styled-components";

export const SideMenu = styled.nav`
  height: 100vh;
  background-color: #1e1e1e;
`

export const ContainerMenu = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
`

export const Group = styled.ul` // setting group or navigatino group
  display: flex;
  flex-direction: column;
`

export const ItemList = styled.li`
  display: flex;
  align-items: center;
  gap:.5rem;
  color: #fff;
  width: auto;
  min-width: 4rem;
  padding:1rem;
  font-weight: 500;
  cursor: pointer;

  img{
    width: 1.5rem;
  }
`