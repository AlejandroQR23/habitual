import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderContainer = styled.header`
  height: 80px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #ffffff;

  position: fixed;
  width: 100%;
  z-index: 99;
  top: 0;

  @media screen and (max-width: 580px) {
    .logo {
      width: 100px;
    }
  }
`;

export const OptionsContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: flex-end;

  @media screen and (max-width: 580px) {
    justify-content: center;
    svg {
      width: 16px;
    }
  }
`;

export const OptionLink = styled(Link)`
  cursor: pointer;
  padding: 0 32px;

  @media screen and (max-width: 580px) {
    font-size: 12px;
    line-height: 16px;
    padding: 0 16px;
  }
`;
