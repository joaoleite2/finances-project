import { ContainerMenu, Group, ItemList, MinimizeButton, SideMenu } from "./style";
import dash from "../../assets/dashboard.svg";
import transactions from "../../assets/transactions.svg";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useContext, useState } from "react";
import { PageContext } from "../../contexts/PageContext";

const SideBar:React.FC = () => {
  const [itIsOpen, setIsItOpen] = useState(true);
  const { setPage, page } = useContext(PageContext);
  
  const handleOpenClick = () => {
    setIsItOpen(!itIsOpen);
  }

  const navigationClick = (page:string) => {
    setPage(page);
  }
  
  return(
    <SideMenu className={itIsOpen ? "null" : "closed"}>
      <ContainerMenu>
        <Group>
          <ItemList onClick={() => navigationClick('dashboard')} className={page ==='dashboard' ? 'actived' : ''}>
            <img src={dash} /> <p>Dashboard</p>
          </ItemList>
          <ItemList onClick={() => navigationClick('transactions')} className={page ==='transactions' ? 'actived' : ''}>
            <img src={transactions} /> <p>Movimentação</p>
          </ItemList>
        </Group>
        <Group>
          <ItemList className="user">item</ItemList>
        </Group>
        {!itIsOpen 
        ? <MinimizeButton onClick={() => handleOpenClick()}><FaArrowRight /></MinimizeButton> 
        : <MinimizeButton onClick={() => handleOpenClick()}><FaArrowLeft /></MinimizeButton>
        }   
      </ContainerMenu>
    </SideMenu>
  )
}

export default SideBar;