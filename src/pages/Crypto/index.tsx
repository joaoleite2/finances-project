import React, { useContext } from "react";
import { ChartDiv, Container, Section } from "../global-styles";
import Header from "../../components/Headers";
import { SearchDiv, SearchIcon, SearchInput, SubHeader } from "./style";
import TipComponent from "../../components/TipsComponent";
import found from "../../assets/un-draw/found.svg";
import SelectRequest from "./Select";
import { CiSearch } from "react-icons/ci";
import { CryptoContext } from "../../contexts/CryptoContext";
import Chart from "react-google-charts";
import MostFamous from "./MostFamous";
import { coins } from "./MostFamous/utils";

const CryptoPage:React.FC = () => {
  const { selected, search, setSearch, cryptos } = useContext(CryptoContext);
  console.log(cryptos)
  
  const dataToCharts = ['Year'];
  coins.map(item => dataToCharts.push(item.text));
  
  const data = [
    dataToCharts,
    ['2020',20,20,20,200,20],
    ['2021',22,234,234,200,234],
    ['2021',22,234,234,200,234],
  ];
  
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
      <Section className={data ? 'chart' : ''}>
        {!data ? (
          <TipComponent
            image={found}
            title="Selecione uma opção"
            paragraph="Uma opção deve ser selecionada, para realizarmos a busca."
          />
        ):(
          <>
            <ChartDiv>
              <Chart
                chartType="AreaChart"
                width="100%"
                height="45rem"
                data={data}
                options={{colors:coins.map(item => item.color), title:'Valores', legend:{position:"top"}}}
              />
            </ChartDiv>
            <MostFamous />
          </>
        )}
      </Section>
    </Container>
  )
}

export default CryptoPage;