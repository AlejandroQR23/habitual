import styled from 'styled-components';

export const Alert = styled.div`
  margin-top: 16px;
  padding: 20px;
  background-color: #51b960;
  color: white;

  animation: slide-in-bottom 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
`;

export const CloseBtn = styled.span`
  margin-left: 15px;
  color: white;
  font-weight: bold;
  float: right;
  font-size: 22px;
  line-height: 20px;
  cursor: pointer;
  transition: 0.3s;

  text-decoration: none;
`;
