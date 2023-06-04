import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import {store, persistor} from './Redux/Store/Store'
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react'
import { Global, ThemeProvider } from '@emotion/react';
import { GlobalStyles } from './Styles/Global.styles';
import {theme} from './Styles/Theme';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter >
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ThemeProvider theme={theme}>
          <Global styles={GlobalStyles}/>
            <App />
          </ThemeProvider>
        </PersistGate>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
