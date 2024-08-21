import { ContainerMenu, Group, ItemList, MinimizeButton, SideMenu } from "./style";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useContext, useState } from "react";
import { PageContext } from "../../contexts/PageContext";
import { navItems } from "./utils";

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
          {navItems.map((item,index)=> (
            <ItemList onClick={() => navigationClick(item.page)} 
            className={page === item.page ? 'actived' : ''}
            key={index}
            >
              <img src={item.icon} /> <p>{item.textPage}</p>
            </ItemList>
          ))}
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