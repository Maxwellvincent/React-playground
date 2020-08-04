import React from 'react';
import './demonymApp.css'

import {Demonym} from './demonym';
import {CountrySelector} from './countrySelector';


export class DemonymApp extends React.Component {
  constructor(props){
    super(props)
    this.state = {}
  }
  render() {
    return (
      <div className="demonym_app">
        <CountrySelector countries={[{name:"Barbados"}, {name:"Bahrain"}]}/>
        <Demonym name="Barbadian" country="Barbados"/>
      </div>
    );
  }
}

