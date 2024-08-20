import React, { useContext } from "react";
import Header from "../../components/Headers";
import MovementCard from "./MovementsCards";
import { DashboardContext } from "../../contexts/DashboardContext";
import { Container, Section } from "../global-styles";

const Dashboard:React.FC = () => {
  const { movements } = useContext(DashboardContext)
  
  return(
    <Container>
      <Header pageTitle="Dashboard"/>
      <Section>
        {movements.map((item,index)=>(
          <MovementCard key={index} title={item.name} type={item.type} value={item.value} />
        ))}
      </Section>
    </Container>
  )
}

export default Dashboard;