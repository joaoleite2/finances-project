import React, { useContext } from "react";
import { Container, Section } from "../global-styles";
import Header from "../../components/Headers";
import { SearchDiv, SubHeader } from "./style";
import TipComponent from "../../components/TipsComponent";
import found from "../../assets/un-draw/found.svg";
import SelectCrypto from "./Select";
import { CiSearch } from "react-icons/ci";
import { CryptoContext } from "../../contexts/CryptoContext";

const CryptoPage:React.FC = () => {
  const { selected } = useContext(CryptoContext);
  
  return(
    <Container>
      <Header pageTitle="Crypto" />
      <SubHeader>
        <SelectCrypto />
        {selected.value === 'search' ? (
          <SearchDiv>
            <CiSearch />
          </SearchDiv>
        ) : null}
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