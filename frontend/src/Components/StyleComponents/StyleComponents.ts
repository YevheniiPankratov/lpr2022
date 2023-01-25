import styled from 'styled-components';
import Toolbar from '@mui/material/Toolbar';

export const StyleToolbar = styled(Toolbar)`
  background: linear-gradient(30deg, #824fa8 45%, #55489c 55%);
  display: flex;
  justify-content: space-between;
`;

export const Main = styled.main`
  display: flex;
  flex: 1 0 auto;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const UserPageDiv = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 95%;
  background-color: #fbfbfb;
  margin-top: 15px;
  border-top: 2px solid black;
  padding: 20px;
`;
