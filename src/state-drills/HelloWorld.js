import React from 'react';

export class HelloWorld extends React.Component {
    state = {
        who: 'world'
    }
    handleClick = (e) => {
        const newWord = e.target.innerText;
        this.setState({
            who: newWord
        })
    }
    render(){
        return (<div>
            <p>Hello, {this.state.who}</p>
            <button onClick={this.handleClick}>World</button>
            <button onClick={this.handleClick}>Friend</button>
            <button onClick={this.handleClick}>React</button>
        </div>)
    }
}