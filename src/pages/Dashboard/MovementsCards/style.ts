import styled from "styled-components";

export const CardDiv = styled.div`
  border: 1px solid #DFDFE0;
  border-radius: 1rem;
  width: auto;
  width: fit-content;
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
`

export const MovementBanner = styled.div`
  font-size: 3rem;
  padding: 1rem 2rem;
  border-radius: 1rem;
  width: 15rem;
  display: flex;
  justify-content: center;
  margin-bottom: 1.5rem;
  
  &.investiments{    
    background-color: #7EF06A;
    color: green;
  }
  &.expenses{
    background-color: #7EF06A;
    color: red;
  }
  &.fixedExpenses{
    background-color: #7EF06A;
    color: orange;
  }
`

export const MovementTitle = styled.h1`
  font-weight: 600;
  font-size: 1.4rem;
  margin-bottom: .8rem;
`

export const MovementeValue = styled.div`
  font-size: 1.8rem;
  font-weight: 700;
`