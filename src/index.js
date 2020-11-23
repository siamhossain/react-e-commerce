import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';
import App from './App';
import { ProductProvider } from './context';
import './index.css';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <ProductProvider>
    <Router>
      <App />
    </Router>
  </ProductProvider>,
  document.getElementById('root')
);


serviceWorker.unregister();
