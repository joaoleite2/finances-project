import React, { createContext, useState } from "react";

interface PageContextProps {
  page:string;
  setPage:React.Dispatch<React.SetStateAction<string>>;
}

export const PageContext = createContext<PageContextProps>({
  page:'',
  setPage:() => {}
})

export const PageProvider:React.FC<any> = ({children}) => {
  const [page, setPage] = useState('crypto');

  return(
    <PageContext.Provider value={{
      page,
      setPage
    }}>
      {children}
    </PageContext.Provider>
  )
}