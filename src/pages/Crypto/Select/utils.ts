export interface OptionType {
  value:string;
  text:string;
}

export const options:OptionType[] = [
  {
    text:'Veja mais',
    value:'seeMore'    
  },
  {
    text:'Moeda específica',
    value:'specificCurrency'
  },
  {
    text:'Pesquisar uma entre as mais famosas',
    value:'search'
  }
];