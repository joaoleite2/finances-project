import React from "react";
import { Container, Section } from "../global-styles";
import Header from "../../components/Headers";
import { SubHeader } from "./style";
import TipComponent from "../../components/TipsComponent";
import found from "../../assets/un-draw/found.svg";
import SelectCrypto from "./Select";

const CryptoPage:React.FC = () => {

  return(
    <Container>
      <Header pageTitle="Crypto" />
      <SubHeader>
        <SelectCrypto />
      </SubHeader>
      <Section>
        <TipComponent 
          image={found}
          title="Selecione uma opção"
          paragraph="Uma opção deve ser selecionada, para realizarmos a busca."
        />
      </Section>
    </Container>
  )
}

export default CryptoPage;