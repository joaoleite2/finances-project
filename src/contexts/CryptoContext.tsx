import React, { createContext, useState } from "react";

interface CryptoContextProps{
  selected:string;
  setSelected:React.Dispatch<React.SetStateAction<string>>;
  search:string;
  setSearch:React.Dispatch<React.SetStateAction<string>>;
}

export const CryptoContext = createContext<CryptoContextProps>({
  selected:'',
  setSelected:() => {},
  search:'',
  setSearch:() => {}
})

export const CryptoProvider:React.FC<any> = ({children}) => {
  const [selected, setSelected] = useState('Selecione')
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