import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { ThemeProvider } from '@emotion/react';
import store from 'redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';

import './index.css';
import App from './App';

const theme = {
  colors: {
    white: '#ffffff',
    blue: '#2196f3',
    accentBlue: '#1e81d3',
    grey: '#9b9b9b',
    accentGrey: '#878787',
    disabledGrey: '#bebebe',
    disabledGlue: '#7fbff3',
  },
};

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store.store}>
        <PersistGate loading={null} persistor={store.persistor}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
