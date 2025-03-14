import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from './Components/Context';
import App from './Components/App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
