import styled from 'styled-components';

import { colors } from '../../../theme/styled';

export const Form = styled.form`
  display: flex;
`;

export const Button = styled.button.attrs({
  type: 'button',
})`
  border: 1px solid ${colors.primary};
  color: ${colors.secondary};
  font-family: Arial, Helvetica, sans-serif;
  outline: none;
  padding: 10px 20px;
  font-size: 14px;
  transition: background-color 150ms ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: ${colors.primary};
  }
`;
