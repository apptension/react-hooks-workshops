import styled from 'styled-components';
import { ReactComponent as LogoSVG } from '../../images/icons/logo.svg';
import { colors } from '../../theme/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding-top: 30px;
`;

export const Logo = styled(LogoSVG)`
  width: 100px;
  margin-bottom: 20px;
`;

export const Todos = styled.div`
  padding: 20px 0;
  display: flex;
  flex-direction: column;
`;

export const SwitchOrder = styled.button.attrs({
  type: 'button',
})`
  outline: none;
  border: 1px solid ${colors.primary};
  cursor: pointer;
  transition: 100ms ease-in-out;
  font-size: 10px;
  text-transform: uppercase;
  color: ${colors.secondary};
  flex: 0;
  align-self: flex-end;
  padding: 4px 8px;

  &:hover {
    background: ${colors.primary};
  }
`;
