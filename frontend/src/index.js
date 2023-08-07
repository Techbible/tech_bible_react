import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Titlee from './title.js'
import { HashRouter } from 'react-router-dom';
import { AuthContextProvider } from './context/AuthContext';
import {
  RecoilRoot,
} from 'recoil';
import Titlee from './title';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthContextProvider>
    <RecoilRoot>
      <HashRouter hashType="noslash" basename={process.env.PUBLIC_URL}>
        <App />
        <Titlee />
      </HashRouter>
    </RecoilRoot>
  </AuthContextProvider>
);

