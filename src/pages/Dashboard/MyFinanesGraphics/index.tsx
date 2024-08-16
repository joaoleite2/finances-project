import React from "react";
import { DataForGraphics, GraphicValues, Situation, TitleForGraphic } from "./style";

const FinancesGraphics:React.FC = () => {
  return(
    <DataForGraphics>
      <TitleForGraphic>
        Received
      </TitleForGraphic>
      <GraphicValues>
        R$ 1040,09
      </GraphicValues>
      <Situation>
        10%
      </Situation>
    </DataForGraphics>
  )
}

export default FinancesGraphics;