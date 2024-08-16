import { ContainerMenu, Group, ItemList, MinimizeButton, SideMenu } from "./style";
import dash from "../../assets/dashboard.svg";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useState } from "react";

const itemMenu = [
  {
    icon:dash,
    text:'Dashboard'
  },
];

const SideBar:React.FC = () => {
  const [itIsOpen, setIsItOpen] = useState(true);
  
  const handleOpenClick = () => {
    setIsItOpen(!itIsOpen);
  }
  
  return(
    <SideMenu className={itIsOpen ? "null" : "closed"}>
      <ContainerMenu>
        <Group>
          {itemMenu.map((item) => (
            <ItemList><img src={item.icon} /> <p>{item.text}</p></ItemList>
          ))}
        </Group>
        <Group>
          <ItemList>item</ItemList>
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