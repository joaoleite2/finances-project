import React, { useContext } from "react";
import { Container, Section } from "./style";
import Header from "../../components/Headers";
import { DashboardContext } from "../../contexts/DashboardContext";
import FinancesGraphics from "./FinanesGraphics";

const Dashboard:React.FC = () => {
  const { graphics, setGraphics } = useContext(DashboardContext);
  console.log(graphics)
  
  return(
    <Container>
      <Header />
      <Section>
        
      </Section>
    </Container>
  )
}

export default Dashboard;