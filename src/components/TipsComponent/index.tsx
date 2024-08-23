import React from "react";
import { TipDiv, TipText } from "./style";

interface TipsPropsType {
  title:string;
  paragraph:string;
  image:string;
}

const TipComponent:React.FC<TipsPropsType> = ({ image,paragraph,title }:TipsPropsType) => {
  return(
    <TipDiv>
      <TipText>
        <h2>{title}</h2>
        <p>{paragraph}</p>
      </TipText>
      <img src={image} draggable="false"/>
    </TipDiv>
  )
}

export default TipComponent;