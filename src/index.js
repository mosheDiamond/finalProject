import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App';
import { AuthProvider } from './Context/AuthContext';
import { CurrenUserInfoProvider } from './Context/CurrenUserInfoContext';
import { DataProvider } from './Context/DataContext';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <DataProvider>
  <BrowserRouter>
    <CurrenUserInfoProvider>
      <AuthProvider>      
        <App />
      </AuthProvider>  
    </CurrenUserInfoProvider>    
  </BrowserRouter>
  </DataProvider>
);
