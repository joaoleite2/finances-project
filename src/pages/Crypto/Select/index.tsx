import React, { useState } from "react";
import { Container, CryptoSelect, OptionItem, Options } from "./style";

const SelectCrypto:React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const options = ["Pesquisar uma entre as mais famosas","Ver muitas","Moeda específica"];

  const handleClickOnSelect = () => {
    setOpen(!open);
  }
  
  return(
    <Container>
      <CryptoSelect onClick={()=> handleClickOnSelect()}>Selecione</CryptoSelect>
      {open ? (
        <Options>
          {options.map((item, index)=> (
            <OptionItem key={index}>{item}</OptionItem>
          ))}
        </Options>
      ): null}
    </Container>
  )
}

export default SelectCrypto;