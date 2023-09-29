import React from 'react';
import { useDispatch } from 'react-redux';

import { Container } from '../../styles/GlobalStyles';
import { Title } from './styles';

import * as exampleActions from '../../store/modules/example/action';

export default function Login() {
  const dispatch = useDispatch();

  function handleClick(e) {
    e.preventDefault();

    dispatch(exampleActions.clicaBotaoRequest());
  }

  return (
    <Container>
      <Title>
        Login
        <small>oiii</small>
      </Title>
      <p>lorem</p>
      <button type="button" onClick={handleClick}>
        Enviar
      </button>
    </Container>
  );
}
