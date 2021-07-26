import styled from 'styled-components';

export const CartIconContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  svg {
    width: 24px;
    height: 24px;
  }
`;

export const ItemCount = styled.div`
  bottom: 10px;
  position: absolute;
  font-weight: bold;
  right: 6px;
  font-size: 14px;
`;
