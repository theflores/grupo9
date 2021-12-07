import { useState } from 'react';
import Page from '../Page';
import Content from '../UI/Content';
import TextBox from '../UI/TextBox';
import { PrimaryButton } from '../UI/Button';
import ComboBox from '../UI/ComboBox';

import { useDispatch } from 'react-redux';
import { addNewSwot } from '../../store/reducers/swot/actions';
import { useNavigate } from 'react-router';

const SwotAdd = () => {
  const [txtDesc, setTxtDesc] = useState();
  const [txtMeta, setTxtMeta] = useState();
  const [txtType, setTxtType] = useState('S');

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onChangeHandler = (e)=> {
    const {name, value} = e.target;
    switch(name){
      case "txtDesc":
        setTxtDesc(value);
        break;
      case "txtMeta":
        setTxtMeta(value);
        break;
      case "txtType":
        setTxtType(value);
        break;
    }
  }
  const onBtnClick = (e)=> {
    e.preventDefault();
    e.stopPropagation();
    const curatedSwotMeta = txtMeta.replaceAll(/,/g, '|');
    addNewSwot(dispatch, txtDesc, curatedSwotMeta, txtType, navigate, "/list" )
  }
  return (
    <Page showHeader showNavBar title={"Registrar nuevo producto"}>
      <Content>
        <TextBox
          label="Nombre"
          placeholder="Nombre"
          value={txtDesc}
          name="txtDesc"
          onChange={onChangeHandler} >
        </TextBox>
        <TextBox
          label="Precio"
          placeholder="Precio del producto."
          value={txtMeta}
          name="txtMeta"
          onChange={onChangeHandler} >
        </TextBox>
        <ComboBox
          label="Tipo"
          name="txtType"
          value={txtType}
          onChange={onChangeHandler}
        >
          <option value="S">Malo</option>
          <option value="W">Regular</option>
          <option value="O">Bueno</option>
          <option value="T">Excelente</option>
        </ComboBox>
        <div style={{ width: "100%", padding: '0.5em', marginTop: '1em' }}>
          <PrimaryButton onClick={onBtnClick}>Guardar</PrimaryButton>          
        </div>
      </Content>
    </Page>
  );
}

export default SwotAdd;
