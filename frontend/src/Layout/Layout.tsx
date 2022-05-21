import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import GlobalStyles from './GlobalStyles';
import { Header, Footer, Main } from '../Components';
import { HomePage, LoginPage, SignUpPage } from '../Pages';
import RoutesList from './RoutesList';

const Layout: React.FC = () => {
  const { HOME, LOGIN, SIGNUP } = RoutesList;
  const [isAuthorized] = useState(false);

  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Header />
        <Main>
          <Routes>
            <Route path={HOME} element={<HomePage />} />
            {!isAuthorized ? (
              <>
                <Route path={LOGIN} element={<LoginPage />} />
                <Route path={SIGNUP} element={<SignUpPage />} />
              </>
            ) : null}
          </Routes>
        </Main>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default Layout;
