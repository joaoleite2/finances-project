import React from "react";
import { Container, Section } from "../global-styles";
import Header from "../../components/Headers";
import { CryptoSelect, SubHeader } from "./style";

const CryptoPage:React.FC = () => {

  return(
    <Container>
      <Header pageTitle="Crypto" />
      <SubHeader>
        <CryptoSelect>Selecione</CryptoSelect>
      </SubHeader>
      <Section>

      </Section>
    </Container>
  )
}

export default CryptoPage;