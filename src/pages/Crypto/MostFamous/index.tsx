import React from "react";
import { Container, ContainerCoin } from "./style";
import { coins } from "./utils";

const MostFamous:React.FC = () => {
  return(
    <Container>
      {coins.map(item => (
        <ContainerCoin>
          <img src={item.icon} />
          {item.text}
        </ContainerCoin>
      ))}
    </Container>
  )
}

export default MostFamous;