import styled from "styled-components";

export const ModalContainer = styled.div`
  background-color: white;
  color: #1e1e1e;
  padding: 8rem 0 4rem 0;
  width: 30%;
  position: relative;
  left: 50%;
  top:50%;
  transform: translate(-50%, -50%);
  border-radius: 2rem;
`

export const CreateForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 0 4rem;
`

export const InputDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: .3rem;
`

export const InputLabel = styled.label`
  font-weight: 500;
  font-size: .8rem;
`

export const Input = styled.input`
  width: 100%;
  background-color: #fff;
  border-radius: 1.4rem;
  outline: none;
  border: 1px solid #DFDFE0;
  padding: .7rem;
`

export const ButtonsDiv = styled.div`
  width: 100%;
  margin-top: 2rem;
  display: flex;
  gap:.4rem;
`

export const Buttons = styled.div`
  width: 50%;
  box-sizing: border-box;
  background-color: #262626;
  padding: 1rem;
  text-align: center;
  color:#fff;
  font-weight: 500;
  border-radius: 2.4rem;
  font-size: 1.2rem;
  cursor: pointer;

  &.cancel{
    color: #1e1e1e;
    background-color: #fff;
    border: 1px solid #1e1e1e;
  }
`