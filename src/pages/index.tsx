import SideBar from "../components/SideBar";
import Dashboard from "./Dashboard";
import { MainContainer } from "./style";

const Page = () => {
  return(
    <MainContainer>
      <SideBar />
      <Dashboard />
    </MainContainer>
  )
}

export default Page;