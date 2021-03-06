import styled from 'styled-components';

export const ColorCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.color};
  border-radius: 10px;
  width: 156px;
  min-height: 156px;
  margin-bottom: 16px;

  p {
    margin: 0;
    color: #ffffff;
    font-weight: bold;
    padding: 16px 16px 20px;
    min-height: 72px;
  }

  img {
    max-height: 96px;
  }
`;

export const ColorCardImg = styled.div`
  width: 100%;
  height: 112px;
  text-align: center;

  img {
    max-height: 96px;
  }
`;

export const ButtonContainer = styled.div`
  align-self: flex-end;
  padding: 8px;
  margin-right: 10px;
  width: 32px;
  height: 32px;
  background: #ffffff;
  box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.05);
  border-radius: 15px;
  margin-bottom: 10px;
  cursor: pointer;
`;
