import styled from "styled-components";

export const SideMenu = styled.nav`
  height: 100%;
  background-color: #1e1e1e;
  border-radius: 0 1rem 1rem 0;
`

export const ContainerMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
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
  font-size: .9rem;
  cursor: pointer;

  img{
    width: 1.3rem;
  }
`