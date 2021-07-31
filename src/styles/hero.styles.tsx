import styled from 'styled-components';

export const HeroContainer = styled.div`
  margin-top: 48px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 1040px) {
    justify-content: center;
  }
`;

export const HeroTextContainer = styled.div`
  max-width: 571px;
  width: 60%;

  @media screen and (max-width: 1040px) {
    margin-bottom: 32px;
  }

  @media screen and (max-width: 580px) {
    h1 {
      font-size: 32px;
      line-height: 32px;
    }

    p {
      font-size: 16px;
      line-height: 20px;
    }
  }
`;

export const CategoryHeroContainer = styled(HeroContainer)`
  flex-direction: column;
  justify-content: center;
  text-align: center;

  margin: 48px auto 0;
`;
