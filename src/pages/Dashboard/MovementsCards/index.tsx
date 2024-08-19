import React from "react";
import { CardDiv, MovementBanner, MovementeValue, MovementTitle } from "./style";
import { MdAttachMoney, /*MdMoneyOff*/ } from "react-icons/md";

interface PropsType {
  title:string;
  value:string;
  type:string;
}

const MovementCard:React.FC<PropsType> = ({ title, type, value } : PropsType) => {
  return(
    <CardDiv>
      <MovementBanner className={type}>
        <MdAttachMoney />
      </MovementBanner>
      <MovementTitle>
        {title}
      </MovementTitle>
      <MovementeValue>
        R$ {value}
      </MovementeValue>
    </CardDiv>
  )
}

export default MovementCard;