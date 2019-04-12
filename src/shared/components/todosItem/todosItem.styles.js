import styled, { css } from 'styled-components';
import { prop } from 'ramda';

import { styleWhenTrue } from '../../utils/rendering';
import { colors } from '../../../theme/styled';

export const Container = styled.div`
  padding: 20px;
  margin-top: 15px;
  width: 400px;
  display: flex;
  align-items: center;
  transition: all 200ms ease-in-out;
  opacity: 0.5;
  ${styleWhenTrue(
    prop('isActive'),
    css`
      box-shadow: 0px 0 8px -5px ${colors.black60};
      opacity: 1;
    `
  )};
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 1;
`;

export const Description = styled.div`
  color: ${colors.black};
`;

export const DateTime = styled.div`
  margin-top: 10px;
  color: ${colors.black60};
  font-size: 12px;
`;

export const Checkbox = styled.div`
  position: relative;
  height: 20px;
  width: 20px;
  color: ${styleWhenTrue(prop('isChecked'), colors.black60, colors.primary)};
  border: 1px solid currentColor;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: box-shadow 150ms ease-in-out;

  &:hover {
    box-shadow: inset 0 0 0px 1px currentColor;
  }

  ${styleWhenTrue(
    prop('isChecked'),
    css`
      &:after {
        width: 8px;
        height: 8px;
        position: absolute;
        content: '';
        background: currentColor;
      }
    `
  )};
`;
