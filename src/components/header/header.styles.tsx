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

  .logo {
    padding-left: 32px;
  }
`;

export const OptionsContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: flex-end;
`;

export const OptionLink = styled(Link)`
  cursor: pointer;
  padding: 0 32px;
`;
