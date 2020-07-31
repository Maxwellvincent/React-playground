import React from 'react';

export class TheDate extends React.Component {
    // Constructor is A life cycle method
    constructor(props){
        super(props)
        this.state = {
            datetime: new Date()
        };
    }
    componentDidMount() {
        this.interval = setInterval( () => {
            this.setState({
                datetime: new Date()
            })
        },1000)
    }
    componentWillUnmount(){
        clearInterval(this.interval)
    }
    render(){
    
    return <div>{this.state.datetime.toLocaleString()}</div>;
    }
}