import React from "react";
import SideBar from "../components/SideBar";
import Dashboard from "./Dashboard";
import { MainContainer } from "./global-styles";
import { BrowserRouter, Route, Routes } from "react-router";
import TransactionsPage from "./Transactions";
import CryptoPage from "./Crypto";

interface PagesType {
  element:any
  path:string
}

const routes:PagesType[] = [
  {
    element:<Dashboard/>,
    path:'/'
  },
  {
    element:<TransactionsPage/>,
    path:'movimentacoes'
  },
  {
    element:<CryptoPage/>,
    path:'/crypto'
  },
]

const Page:React.FC = () => {
  return(
    <>
    <MainContainer>
      <SideBar />
      <BrowserRouter>
        <Routes>
          {routes.map((item, index) => (
            <Route path={item.path} element={item.element} key={index}/>
          ))}
        </Routes>
      </BrowserRouter>
    </MainContainer>
    
    </>
  )
}

export default Page;