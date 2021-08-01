import styled from 'styled-components';

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 340px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid #3a3a3a;
  background-color: white;
  top: 60px;
  right: 100px;
  z-index: 5;

  @media screen and (max-width: 840px) {
    right: 20px;
  }

  animation: swing-in-top-fwd 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) both;

  button {
    margin-top: auto;
    border-radius: 0px;
  }
`;

export const CartItemsContainer = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow: scroll;
`;

export const EmptyMessage = styled.span`
  font-size: 18px;
  margin: 15px auto;
`;
