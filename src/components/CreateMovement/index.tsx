import React, { useContext, useEffect, useState } from "react";
import { CreateForm, InputDiv, InputLabel, Input, ModalContainer, ButtonsDiv, Buttons, Select } from "./style";
import ModalHeaderDefault from "../Modal/HeaderDefault";
import { itemsForInput } from "./utils";
import { ModalContext } from "../../contexts/ModalContext";

interface FormDataType {
  name:string;
  date:string;
  type:string;
  method:string;
}

const CreateMovement:React.FC = () => {  
  const { setActivedModal } = useContext(ModalContext);
  const [formData, setFormData] = useState<FormDataType | any>({
    name:'',
    date:'',
    type:'',
    method:''
  });

  useEffect(() => {
    console.log(formData);
  },[formData])

  const handleUpdateFormData = (field:string, value:string) => {
    setFormData((prevForm:any) => ({
      ...prevForm,
      [field]: value
    }))
  }
  
  return(
    <ModalContainer>
      <ModalHeaderDefault title="Criar movimentação" tip="Insira os dados da nova movimentação" />
      <CreateForm>
        {itemsForInput.map((item, index) =>(
          <InputDiv key={index}>
          {item.type !== 'select' ? (
            <>
            <InputLabel>{item.label}</InputLabel>
            <Input type={item.type} 
              value={formData[item.value]}
              onChange={(event) => handleUpdateFormData(item.value, event.target.value)}
            />
            </>
          ) : (
            <>
              <InputLabel>{item.label}</InputLabel>
              <Select value={formData[item.value]} onChange={(event) => handleUpdateFormData(item.value, event.target.value)}>
                <option value={''}>Selecione um item</option>
                {item.options.map((item, index) => (
                  <option key={index} value={item.value}>{item.optionText}</option>
                ))}
              </Select>
            </>
          )}
          </InputDiv>
        ))}
        <ButtonsDiv>
          <Buttons className="cancel" onClick={()=> setActivedModal(false)}>Cancelar</Buttons>
          <Buttons>Salvar</Buttons>
        </ButtonsDiv>
      </CreateForm>
    </ModalContainer>
  )
}

export default CreateMovement;