import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderContainer = styled.div`
  margin: 24px 72px 0;
  height: 76px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const LogoContainer = styled(Link)`
  float: left;
  text-decoration: none;
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
