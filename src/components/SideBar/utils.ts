import dash from "../../assets/dashboard.svg";
import transactions from "../../assets/transactions.svg";
import bitcoin from "../../assets/bitcoin.svg";

interface NavType {
  icon:string;
  page:string;
  textPage:string;
}

export const navItems: NavType[] = [
  {
    icon:dash,
    page:'dashboard',
    textPage:'Dashboard'
  },
  {
    icon:transactions,
    page:'transactions',
    textPage:'Transações'
  },
  {
    icon:bitcoin,
    page:'crypto',
    textPage:'Crypto'
  },
]