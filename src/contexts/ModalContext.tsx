import React, { createContext, useState } from "react";

interface ModalContextProps {
  modalSection:string;
  setModalSection: React.Dispatch<React.SetStateAction<string>>;
  activedModal:boolean;
  setActivedModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ModalContext = createContext<ModalContextProps>({
  modalSection:'',
  setModalSection:() => {},
  activedModal: false,
  setActivedModal: () => {} 
})

export const ModalProvider: React.FC<any> = ({children}) => {
  const [modalSection, setModalSection] = useState('');
  const [activedModal, setActivedModal] = useState(false);

  return(
    <ModalContext.Provider value={{
      modalSection,
      setModalSection,
      activedModal,
      setActivedModal
      }}
    >
      {children}
    </ModalContext.Provider>
  )
}