import { ContainerMenu, Group, ItemList, SideMenu } from "./style";
import dash from "../../assets/dashboard.svg";

const SideBar:React.FC = () => {
  const itemMenu = [
    {
      icon:dash,
      text:'Dashboard'
    },
  ]
  
  return(
    <SideMenu>
      <ContainerMenu>
        <Group>
          {itemMenu.map((item) => (
            <ItemList><img src={item.icon} /> {item.text}</ItemList>
          ))}
        </Group>
        <Group>
          <ItemList>item.text</ItemList>
        </Group>
      </ContainerMenu>
    </SideMenu>
  )
}

export default SideBar;