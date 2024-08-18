import React, { createContext, useState } from 'react'

interface FormDataType {
  name:string;
  date:string;
  type:string;
  method:string;
  value:string;
}

interface DashboardContextProps {
  movements:FormDataType[]
  setMovements: React.Dispatch<React.SetStateAction<{}[]>>
}

export const DashboardContext = createContext<DashboardContextProps>({
  movements:[],
  setMovements:() => {}
})

export const DashboardProvider: React.FC<any> = ({ children }) => {
  const [ movements, setMovements ] = useState<any[]>([])

  return (
    <DashboardContext.Provider
      value={{
        movements,
        setMovements
      }}
    >
      {children}
    </DashboardContext.Provider>
  )
}