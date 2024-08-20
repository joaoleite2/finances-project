import React from "react";
import { HeaderDiv, TextHeader } from "./style";

interface HeaderPropsType{
  pageTitle:string;
}

const Header:React.FC<HeaderPropsType> = ({pageTitle}:HeaderPropsType) => {  
  return(
    <HeaderDiv>
      <TextHeader>{pageTitle}</TextHeader>
    </HeaderDiv>
  )
}

export default Header;