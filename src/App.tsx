import React from "react";
import Page from "./pages";
import { DashboardProvider } from "./contexts/DashboardContext";

const App:React.FC = () => {
  return(
    <>
    <DashboardProvider>
      <Page />
    </DashboardProvider>
    </>
  )
}

export default App;