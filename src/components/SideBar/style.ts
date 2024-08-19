import styled from "styled-components";

export const SideMenu = styled.nav`
  height: 100%;
  background-color: #1e1e1e;
  border-radius: 0 1rem 1rem 0;
  width: auto;
  padding: 1rem;

  &.closed{
    p{
      display:none;
    }
  }
`

export const ContainerMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  height: 100%;
`

export const Group = styled.ul` // setting group or navigatino group
  display: flex;
  flex-direction: column;
  gap:.5rem
`

export const ItemList = styled.li`
  display: flex;
  align-items: center;
  gap:.5rem;
  color: #fff;
  padding:1rem;
  font-weight: 500;
  font-size: .9rem;
  cursor: pointer;
  justify-content: center;
  border-radius: 2rem;

  img{
    width: 1.3rem;
  }

  &.actived{
    color:#1e1e1e;
    background-color: #fff;
  }
`

export const MinimizeButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: -2.3rem;
  bottom:50%;
  transform: translate(0, 50%);
  padding: .8rem;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  outline: none;
`