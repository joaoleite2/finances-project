import React from "react";
import { Container, CryptoList, ListItem } from "./style";
import { coins } from "./utils";

const MostFamous:React.FC = () => {
  return(
    <Container>
      <CryptoList>
        {coins.map((item,index) => (
          <ListItem key={index}><img src={item.icon} alt={`${item.text} icon`} draggable="false"/> {item.text}</ListItem>
        ))}
      </CryptoList>
    </Container>
  )
}

export default MostFamous;