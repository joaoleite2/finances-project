import React, { createContext, useState } from 'react'

interface DashboardContextProps {
  graphics:{}[]
  setGraphics: React.Dispatch<React.SetStateAction<{}[]>>
}

export const DashboardContext = createContext<DashboardContextProps>({
  graphics:[{}],
  setGraphics:() => {}
})

export const DashboardProvider: React.FC<any> = ({ children }) => {
  const [ graphics, setGraphics ] = useState<any[]>([])

  return (
    <DashboardContext.Provider
      value={{
        graphics,
        setGraphics
      }}
    >
      {children}
    </DashboardContext.Provider>
  )
}