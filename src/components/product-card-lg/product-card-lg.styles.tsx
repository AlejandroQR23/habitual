import styled from 'styled-components';

export const CardContainer = styled.div`
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  width: 285px;
  height: 312px;

  box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.05);
  border-radius: 10px;
`;

export const CardImg = styled.div`
  width: 100%;
  height: 160px;
  text-align: center;
  background: #f8f7fa;

  img {
    max-height: 128px;
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

  h5 {
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
