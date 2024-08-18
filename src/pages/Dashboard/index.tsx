import React, { useContext } from "react";
import { Container, Section } from "./style";
import Header from "../../components/Headers";
import MovementCard from "./MovementsCards";
import { DashboardContext } from "../../contexts/DashboardContext";

const Dashboard:React.FC = () => {
  const { movements } = useContext(DashboardContext)
  
  return(
    <Container>
      <Header />
      <Section>
        {movements.map((item,index)=>(
          <MovementCard key={index} title={item.name} type={item.type} value={item.value} />
        ))}
      </Section>
    </Container>
  )
}

export default Dashboard;