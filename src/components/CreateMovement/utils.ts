interface ObjectType{
  label:string;
  type:string;
  options:string[] | [];
}

export const itemsForInput:ObjectType[] = [
  {
    label:'Nome',
    type:'text',
    options:[]
  },
  {
    label:'Tipo',
    type:'select',
    options:[
      'Gastos',
      'Ganhos'
    ]
  },
  {
    label:'Método',
    type:'select',
    options:[
      'Crédito',
      'Débito',
      'Dinheiro',
      'Pix'
    ]
  },
  {
    label:'Data',
    type:'date',
    options:[]
  }
]