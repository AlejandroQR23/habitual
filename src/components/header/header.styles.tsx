import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderContainer = styled.div`
  margin-top: 24px;
  height: 76px;
  display: flex;
  justify-content: space-between;
  align-items: center;

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
