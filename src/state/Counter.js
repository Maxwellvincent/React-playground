import React from 'react';

export class Counter extends React.Component {
    constructor(props){
        console.log('props in constructor', props)
        super(props)
        this.state = {
            count: 0
        }
    }

    // Default prop within class
    // static defaultProps = {
    //     step: 5
    // }
    
    
    // New way to init state.
    // state = {
    //     count: 0
    // };

    handleClick = (e) => {
        console.log('props in handleButtonClick', this.props.step)
        console.log('state in handleButtonClick', this.state)
       const newCount = this.state.count + this.props.step;
       this.setState({
           count: newCount
       });
    }

    render(){
        return (
            <div>
                <p>The current count: {this.state.count}</p>
                <button onClick={this.handleClick}>
                    Add 1
                </button>
            </div>
        )
    }
}

Counter.defaultProps = {
    step: 4
}