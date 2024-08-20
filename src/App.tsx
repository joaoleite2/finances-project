import React from "react";
import Page from "./pages";
import { DashboardProvider } from "./contexts/DashboardContext";
import { ModalProvider } from "./contexts/ModalContext";
import Modal from "./components/Modal";
import { PageProvider } from "./contexts/PageContext";

const App:React.FC = () => {
  return(
    <>
    <PageProvider>
      <ModalProvider>
        <DashboardProvider>
          <Page />
          <Modal />
        </DashboardProvider>
      </ModalProvider>
    </PageProvider>
    </>
  )
}

export default App;