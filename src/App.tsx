import React from 'react';
const { IntlProvider } = require('react-intl');
import AccessControl from '@components/AccessControl';
import NavBar from '@containers/NavBar';

const App: React.FC = () => {
  return (
    <IntlProvider locale="en" defaultLocale="en">
      <AccessControl>
        <NavBar />
      </AccessControl>
    </IntlProvider>
  );
};

export default App;
