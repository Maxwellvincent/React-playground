import React from 'react';
import './demonym.css';

export class Demonym extends React.Component {
    

    render(){
        return (
            <div className="demonym">
                A {this.props.name} comes from {this.props.country}
            </div>
        )
    }
}