import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from '../src/paltrows-power-toes/App';
import { HelloWorld } from './state-drills/HelloWorld';
import { Bomb } from './Bomb,';
import { RouletteGun } from './state-drills/RouletteGun';
import {BrowserRouter} from 'react-router-dom';
import AppLang from './lang-content/AppLang';
import {App} from './App';

ReactDOM.render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>
    ,
  document.getElementById('root')
);


