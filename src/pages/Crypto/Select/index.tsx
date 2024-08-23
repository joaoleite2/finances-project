import React, { useContext, useState } from "react";
import { Container, CryptoSelect, OptionItem, Options } from "./style";
import { options } from "./utils";
import { CryptoContext } from "../../../contexts/CryptoContext";

const SelectRequest:React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  // const [selected, setSelected] = useState<string>('Selecione');
  const { selected, setSelected } = useContext(CryptoContext);

  const handleClickOnSelect = () => {
    setOpen(!open);
  }

  const handleClickOnOption = (value:string,text:string) => {
    setSelected({text:text,value:value});
    setOpen(false);
  }
  
  return(
    <Container>
      <CryptoSelect onClick={()=> handleClickOnSelect()}>
        {selected.text.length<=20 ? selected.text : `${selected.text.slice(0,9)}...`}
      </CryptoSelect>
      {open ? (
        <Options>
          {options.map((item, index)=> (
            <OptionItem key={index} onClick={()=> handleClickOnOption(item.value, item.text)}>{item.text}</OptionItem>
          ))}
        </Options>
      ): null}
    </Container>
  )
}

export default SelectRequest;