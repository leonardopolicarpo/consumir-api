import * as types from '../types';

const initialState = {
  botaoClicado: false,
};

export default function (state = initialState, { type } = {}) {
  switch (type) {
    case types.BOTAO_CLICADO_SUCCESS: {
      console.log('Sucesso');
      const newState = { ...state };
      newState.botaoClicado = !newState.botaoClicado;
      return newState;
    }

    case types.BOTAO_CLICADO_FAILURE: {
      // eslint-disable-next-line
      console.log('Deu erro :(');
      return state;
    }

    case types.BOTAO_CLICADO_REQUEST: {
      console.log('Estou fazendo a requisição');
      return state;
    }

    default: {
      return state;
    }
  }
}
