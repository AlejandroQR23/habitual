import styled from 'styled-components';

export const HeroContainer = styled.div`
  margin-top: 48px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 900px) {
    justify-content: center;
  }
`;

export const CategoryHeroContainer = styled(HeroContainer)`
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;

export const HeroTextContainer = styled.div`
  max-width: 571px;
  width: 60%;

  @media screen and (max-width: 900px) {
    margin-bottom: 32px;
  }
`;
