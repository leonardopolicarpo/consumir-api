import styled from 'styled-components';
import * as colors from '../../config/colors';

export const Form = styled.form`
  margin-top: 20px;
  display: flex;
  flex-direction: column;

  input {
    height: 40px;
    font-size: 18px;
    border: 1px solid #ddd;
    border-radius: 4px;

    padding-left: 10px;
    margin-bottom: 20px;

    &:focus {
      outline: 1px solid ${colors.primaryColor};
    }
  }
`;
