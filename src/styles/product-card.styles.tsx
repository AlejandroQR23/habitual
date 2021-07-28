import styled from 'styled-components';

export const CardContainer = styled.div`
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  width: 285px;
  height: 312px;
  position: relative;

  box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.05);
  border-radius: 10px;
`;

export const CardImg = styled.div`
  width: 100%;
  height: 160px;
  text-align: center;
  background: #f8f7fa;

  div {
    height: 32px;
    background: #ffffff;
    border-radius: 100px;

    opacity: 0.7;
    position: absolute;
    top: 55px;
    right: 100px;
    display: none;

    font-size: 10px;
  }

  img {
    max-height: 128px;
  }

  &:hover {
    img {
      opacity: 0.8;
    }
    div {
      opacity: 0.85;
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      padding: 8px;

      cursor: pointer;
      box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.05);

      svg {
        margin-right: 4px;
      }
    }
  }
`;

export const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 16px;

  p {
    margin: 4px 0;
  }
`;

export const CardPriceContainer = styled.div`
  height: 20px;
  width: 100%;
  display: flex;
  flex-direction: row;
  margin: 4px 0;
  justify-content: space-between;
  align-items: center;
`;

export const CardPrice = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  h5,
  h6 {
    padding-right: 10px;
  }
`;

export const CardFooter = styled.div`
  margin: 16px 0px;
  display: flex;
  flex-direction: row;
  align-items: center;

  .review {
    font-size: 12px;
    line-height: 16px;
    padding-right: 10px;
  }

  .category {
    font-weight: bold;
    font-size: 12px;
    line-height: 16px;
    color: #3a3a3a;
  }
`;

//Small Card
export const CardContainerSm = styled(CardContainer)`
  width: 156px;
  height: 237px;
`;

export const CardBodySm = styled(CardBody)`
  width: 100%;
  p {
    font-size: 16px;
    line-height: 24px;
  }
`;

export const CardImgSm = styled(CardImg)`
  height: 137px;

  div {
    right: 40px;
  }
`;

export const CardPriceSm = styled(CardPrice)`
  h6 {
    margin: 8px 0;
  }
`;

export const CardFooterSm = styled(CardFooter)`
  margin: 0;
`;
