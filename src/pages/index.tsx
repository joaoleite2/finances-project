import React, { useContext } from "react";
import SideBar from "../components/SideBar";
import Dashboard from "./Dashboard";
import { MainContainer } from "./global-styles";
import { PageContext } from "../contexts/PageContext";
import TransactionsPage from "./Transactions";
import CryptoPage from "./Crypto";

const Page:React.FC = () => {

  const { page } = useContext(PageContext);
  
  return(
    <MainContainer>
      <SideBar />
      {page === 'dashboard' ? <Dashboard /> : null}
      {page === 'transactions' ? <TransactionsPage /> : null}
      {page === 'crypto' ? <CryptoPage /> : null}
    </MainContainer>
  )
}

export default Page;