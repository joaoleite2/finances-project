import React from "react";
import Page from "./pages";
import { DashboardProvider } from "./contexts/DashboardContext";
import { ModalProvider } from "./contexts/ModalContext";
import Modal from "./components/Modal";

const App:React.FC = () => {
  return(
    <>
    <ModalProvider>
      <DashboardProvider>
        <Page />
        <Modal />
      </DashboardProvider>
    </ModalProvider>
    </>
  )
}

export default App;