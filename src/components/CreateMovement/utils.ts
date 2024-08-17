interface OptionsType{
  value:string;
  optionText:string;
}

interface ObjectType{
  label:string;
  type:string;
  options:OptionsType[] | [];
  value:string;
}

export const itemsForInput:ObjectType[] = [
  {
    label:'Nome',
    type:'text',
    options:[],
    value:'name'
  },
  {
    label:'Tipo',
    type:'select',
    options:[
      {
        optionText:'Investimentos',
        value:'investiments'
      },{
        optionText:'Gastos',
        value:'expenses'
      },{        
        optionText:'Gastos fixos',
        value:'fixedExpenses'
      }
    ],
    value:'type'
  },
  {
    label:'Método',
    type:'select',
    options:[
      {
        optionText:'Pix',
        value:'pix'
      },{
        optionText:'Crédito',
        value:'credit'
      },{
        optionText:'Débito',
        value:'debit'
      },{
        optionText:'Dinheiro',
        value:'money'
      }
    ],
    value:'method'
  },
  {
    label:'Data',
    type:'date',
    options:[],
    value:'date'
  }
]