import React from "react";
import Page from "./pages";
import { DashboardProvider } from "./contexts/DashboardContext";
import { ModalProvider } from "./contexts/ModalContext";
import Modal from "./components/Modal";
import { PageProvider } from "./contexts/PageContext";
import { CryptoProvider } from "./contexts/CryptoContext";

const App:React.FC = () => {
  return(
    <>
    <PageProvider>
      <ModalProvider>
        <DashboardProvider>
          <CryptoProvider>
            <Page />
            <Modal />
          </CryptoProvider>
        </DashboardProvider>
      </ModalProvider>
    </PageProvider>
    </>
  )
}

export default App;