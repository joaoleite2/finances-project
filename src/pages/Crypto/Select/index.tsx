import React, { useContext, useState } from "react";
import { Container, CryptoSelect, OptionItem, Options } from "./style";
import { options } from "./utils";
import { CryptoContext } from "../../../contexts/CryptoContext";

const SelectCrypto:React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  // const [selected, setSelected] = useState<string>('Selecione');
  const { selected, setSelected } = useContext(CryptoContext);

  const handleClickOnSelect = () => {
    setOpen(!open);
  }

  const handleClickOnOption = (value:string) => {
    setSelected(value);
    setOpen(false);
  }
  
  return(
    <Container>
      <CryptoSelect onClick={()=> handleClickOnSelect()}>
        {selected.length<=20 ? selected : `${selected.slice(0,9)}...`}
      </CryptoSelect>
      {open ? (
        <Options>
          {options.map((item, index)=> (
            <OptionItem key={index} onClick={()=> handleClickOnOption(item)}>{item}</OptionItem>
          ))}
        </Options>
      ): null}
    </Container>
  )
}

export default SelectCrypto;