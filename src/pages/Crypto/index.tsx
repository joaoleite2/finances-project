import React, { useContext } from "react";
import { Container, Section } from "../global-styles";
import Header from "../../components/Headers";
import { SearchDiv, SearchIcon, SearchInput, SubHeader } from "./style";
import TipComponent from "../../components/TipsComponent";
import found from "../../assets/un-draw/found.svg";
import SelectRequest from "./Select";
import { CiSearch } from "react-icons/ci";
import { CryptoContext } from "../../contexts/CryptoContext";

const CryptoPage:React.FC = () => {
  const { selected, search, setSearch } = useContext(CryptoContext);
  
  return(
    <Container>
      <Header pageTitle="Crypto" />
      <SubHeader>
        <SelectRequest />
        {selected.value === 'search' ? (
          <SearchDiv >
            <SearchInput 
              type='text' 
              placeholder='Buscar...' 
              value={search}
              onChange={(event)=> setSearch(event.target.value)}
            />
            <SearchIcon>
              <CiSearch />
            </SearchIcon>
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