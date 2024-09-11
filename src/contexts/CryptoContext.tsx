import React, { createContext, useState } from "react";
import { OptionType } from "../pages/Crypto/Select/utils";

interface CryptoContextProps{
  selected:OptionType;
  setSelected:React.Dispatch<React.SetStateAction<OptionType>>;
  search:string;
  setSearch:React.Dispatch<React.SetStateAction<string>>;
  cryptos:string[];
  setCryptos:React.Dispatch<React.SetStateAction<any>>;
}

export const CryptoContext = createContext<CryptoContextProps>({
  selected:{text:'',value:''},
  setSelected:() => {},
  search:'',
  setSearch:() => {},
  cryptos:[],
  setCryptos:() => {}
})

export const CryptoProvider:React.FC<any> = ({children}) => {
  const [selected, setSelected] = useState<OptionType>({text:'Selecione',value:''});
  const [search, setSearch] = useState('');
  const [cryptos, setCryptos] = useState([]);

  return(
    <CryptoContext.Provider value={{
      search,
      setSearch,
      selected,
      setSelected,
      cryptos,
      setCryptos
    }}>
      {children}
    </CryptoContext.Provider>
  )
}