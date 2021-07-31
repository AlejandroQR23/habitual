import styled from 'styled-components';

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;

  svg {
    cursor: pointer;
  }
`;

export const ProductInfoContainer = styled.div`
  align-items: center;
  display: flex;

  @media screen and (max-width: 580px) {
    div {
      display: none;
    }
  }

  img {
    margin-right: 16px;
    width: 72px;
  }
`;

export const ControlsContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-around;

  h6 {
    margin: 0 32px;
  }
`;

export const PriceContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: flex-end;
  h5 {
    margin-right: 32px;
  }
`;
