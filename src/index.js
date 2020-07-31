import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './App';
import { HelloWorld } from './state-drills/HelloWorld';
import { Bomb } from './Bomb,';
import { RouletteGun } from './state-drills/RouletteGun';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


