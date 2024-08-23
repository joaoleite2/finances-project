import styled from "styled-components";

export const Container = styled.div`
  /* border: 1px solid;
  border-radius: 2rem; */
  width: 100%;
  padding: 2rem 0;
`

export const CryptoList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const ListItem = styled.li`
  font-size: 1.2em;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap:1rem;
  cursor: pointer;

  img{
    width: 2.5rem;
  }
`