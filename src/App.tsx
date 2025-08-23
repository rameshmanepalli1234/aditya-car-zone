import React from 'react';
const { IntlProvider } = require('react-intl');
import AccessControl from '@components/AccessControl';

const App: React.FC = () => {
  return (
    <IntlProvider locale="en" defaultLocale="en">
      <AccessControl>
        <div>Hello World</div>
      </AccessControl>
    </IntlProvider>
  );
};

export default App;
