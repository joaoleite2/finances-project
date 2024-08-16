interface ObjectType{
  label:string;
  type:string
}

export const itemsForInput:ObjectType[] = [
  {
    label:'Nome',
    type:'text'
  },
  {
    label:'Tipo',
    type:'select'
  },
  {
    label:'Método',
    type:'select'
  },
  {
    label:'Data',
    type:'date'
  }
]