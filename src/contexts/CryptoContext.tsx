import React, { createContext, useState } from "react";
import { OptionType } from "../pages/Crypto/Select/utils";

interface CryptoContextProps{
  selected:OptionType;
  setSelected:React.Dispatch<React.SetStateAction<OptionType>>;
  search:string;
  setSearch:React.Dispatch<React.SetStateAction<string>>;
}

export const CryptoContext = createContext<CryptoContextProps>({
  selected:{text:'',value:''},
  setSelected:() => {},
  search:'',
  setSearch:() => {}
})

export const CryptoProvider:React.FC<any> = ({children}) => {
  const [selected, setSelected] = useState<OptionType>({text:'Selecione',value:''})
  const [search, setSearch] = useState('')

  return(
    <CryptoContext.Provider value={{
      search,
      setSearch,
      selected,
      setSelected
    }}>
      {children}
    </CryptoContext.Provider>
  )
}