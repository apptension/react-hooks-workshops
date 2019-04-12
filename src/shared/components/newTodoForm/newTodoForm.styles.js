import styled from 'styled-components';

import { colors } from '../../../theme/styled';
import { TextField as TextFieldComponent } from '../textField';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 400px;
`;

export const TextField = styled(TextFieldComponent)`
  flex: 1;
  margin-right: 20px;
`;

export const SubmitButton = styled.button.attrs({
  type: 'button',
})`
  border: none;
  color: ${colors.white};
  font-family: Arial, Helvetica, sans-serif;
  outline: none;
  padding: 10px 20px;
  font-size: 14px;
  transition: background-color 150ms ease-in-out;
  cursor: pointer;
  background-color: ${colors.primary};

  &:hover {
    background-color: ${colors.secondary};
  }
`;

export const FormatButton = styled.button.attrs({
  type: 'button',
})`
  border-radius: 100%;
  height: 28px;
  outline: none;
  border: 1px solid ${colors.primary};
  cursor: pointer;
  transition: 100ms ease-in-out;
  font-size: 10px;
  font-weight: 500;
  color: ${colors.secondary};
  align-items: center;
  flex: 0;
  margin-top: 5px;
  margin-right: 8px;

  &:hover {
    background: ${colors.primary};
  }
`;

export const Row = styled.div`
  display: flex;
`;
