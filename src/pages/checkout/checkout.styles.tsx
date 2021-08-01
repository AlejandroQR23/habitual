import styled from 'styled-components';

export const CheckoutContainer = styled.div`
  text-align: center;
  justify-content: center;
  background-image: url('https://firebasestorage.googleapis.com/v0/b/habitual-qr23.appspot.com/o/cart-background.svg?alt=media&token=3759ae5d-3a0d-4306-85e7-e385ea513e4f');
  background-position: center;

  animation: slide-in-fwd-top 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
`;

export const CheckoutItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TotalContainer = styled.div`
  margin-top: 32px;
`;
