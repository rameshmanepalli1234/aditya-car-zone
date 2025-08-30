import React from 'react';
const { IntlProvider } = require('react-intl');
import AccessControl from '@components/AccessControl';
import NavBar from '@containers/NavBar';
import InfoBar from '@containers/InfoBar';
import MenuBar from '@containers/MenuBar';
import { StyledMainContainer } from './style';

const App: React.FC = () => {
  return (
    <IntlProvider locale="en" defaultLocale="en">
      <AccessControl>
        <StyledMainContainer>
          <InfoBar />
          <MenuBar />
          <NavBar />
        </StyledMainContainer>
      </AccessControl>
    </IntlProvider>
  );
};

export default App;
