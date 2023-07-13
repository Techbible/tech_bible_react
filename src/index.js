import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import { AuthContextProvider } from './context/AuthContext';
import {
  RecoilRoot,
} from 'recoil';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthContextProvider>
    <RecoilRoot>
      <HashRouter hashType="noslash" basename={process.env.PUBLIC_URL}>
        <App />
      </HashRouter>
    </RecoilRoot>
  </AuthContextProvider>
);

