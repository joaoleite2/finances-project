interface OptionsType{
  text:string;
  valueOfForm:string
}

interface ObjectType{
  label:string;
  type:string;
  options:string[] | [];
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
      'Gastos',
      'Ganhos'
    ],
    value:'type'
  },
  {
    label:'Método',
    type:'select',
    options:[
      'Crédito',
      'Débito',
      'Dinheiro',
      'Pix'
    ],
    value:'method'
  },
  {
    label:'Data',
    type:'text',
    options:[],
    value:'date'
  }
]