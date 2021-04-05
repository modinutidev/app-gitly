import React from 'react';
import NetProvider from './src/contexts/NetContext';
import Main from './src/pages/Main';

const App: React.FC = () => {
    return (
      <NetProvider>
        <Main />
      </NetProvider>
    );
};

export default App;