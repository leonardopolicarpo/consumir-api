import styled, { createGlobalStyle } from 'styled-components';
import * as colors from '../config/colors';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
  }

  body {
    font-family: sans-serif;
    background: ${colors.primaryDarkColor};
    color: ${colors.primaryColor};
  }

  html, body, #root {
    height: 100%;
  }

  button {
    cursor: pointer;
    background: ${colors.primaryColor};
    border: none;
    border-radius: 4px;
    color: #ffffff;
    font-weight: 700;
    padding: 10px 20px;
  }

  a {
    text-decoration: none;
    color: ${colors.primaryColor};
  }

  ul {
    list-style: none;
  }

  body .Toastify .Toastify__toast-container .Toastify__toast--sucess {
    background-color: ${colors.successColor};
  }

  body .Toastify .Toastify__toast-container .Toastify__toast--sucess {
    background-color: ${colors.errorColor};
  }
`;

export const Container = styled.section`
  max-width: 360px;
  background: #ffffff;
  margin: 30px auto;
  padding: 30px;
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;
