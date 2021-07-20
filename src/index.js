import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from '@emotion/react';
import { PersistGate } from 'redux-persist/integration/react';
import store from 'redux/store';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';

const theme = {
  colors: {
    white: '#ffffff',
    blue: '#2196f3',
    accentBlue: '#1e81d3',
    grey: '#e1dfdf',
    disabledBlue: '#7fbff3',
  },
};

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store.store}>
        <PersistGate loading={null} persistor={store.persistor}>
          <App />
        </PersistGate>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
