import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App';
import * as serviceWorker from './serviceWorker';
import { Sugar } from 'react-preloaders';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Sugar time='1800' background='linear-gradient(180deg, rgb(30, 55, 65) 0%, rgb(22, 38, 44) 100%)' color='white'/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
