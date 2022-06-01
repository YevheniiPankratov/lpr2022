import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import GlobalStyles from './GlobalStyles';
import { Header, Footer, Main } from '../Components';
import {
  HomePage,
  LoginPage,
  SignUpPage,
  PageNotFound,
  UserPage
} from '../Pages';
import RoutesList from './RoutesList';
import { PrivateOutlet } from '../Helpers/PrivateOutlet';

const Layout: React.FC = () => {
  const { Home, Login, SignUp, NotFound, UserAccount } = RoutesList;

  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Header />
        <Main>
          <Routes>
            <Route path={Home} element={<HomePage />} />
            <Route path={Login} element={<LoginPage />} />
            <Route path={SignUp} element={<SignUpPage />} />
            <Route path={NotFound} element={<PageNotFound />} />

            <Route element={<PrivateOutlet />}>
              <Route path={UserAccount} element={<UserPage />} />
            </Route>
          </Routes>
        </Main>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default Layout;
