import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router} from 'react-router-dom'
import {Auth0Provider} from '@auth0/auth0-react'
import Auth0ProviderWithHistory from './auth/auth0-provider-with-history';

ReactDOM.render(
  <Router>
    <Auth0ProviderWithHistory>
    <App />
    </Auth0ProviderWithHistory>
  </Router>,
  document.getElementById('root')
);
