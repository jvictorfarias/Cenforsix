import './config/ReactotronConfig';

import { PersistGate } from 'redux-persist/integration/react';
import { ToastContainer } from 'react-toastify';
import React from 'react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import history from './services/history';
import GlobalStyles from './styles/global';

import Routes from './routes';

import { store, persistor } from './store';

const App = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <Router history={history}>
        <Routes />
        <GlobalStyles />
        <ToastContainer autoClose={3000} />
      </Router>
    </PersistGate>
  </Provider>
);

export default App;
