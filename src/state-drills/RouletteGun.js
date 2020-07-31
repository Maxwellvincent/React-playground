import React from 'react';

export class RouletteGun extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            chamber: null,
            spinningTheChamber: false
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(){
        console.log("clicked");
        this.setState({
            spinningTheChamber: true
        });
        this.timeout = setTimeout(()=> {
            console.log("Timeout called");
            let randNum = Math.floor((Math.random() * 8) + 1);
            console.log(randNum);

            this.setState({
                chamber: randNum,
                spinningTheChamber: false
            })
        }, 2000);
    }

    componentWillUnmount(){
        clearInterval(this.timeout);
    }

    render(){
        let wordChoice;
        if(this.state.chamber === this.props.bulletInChamber){
            wordChoice = "BANG!!!!"
        } else {
            if(this.state.spinningTheChamber === true){
                 wordChoice = "spinning the chamber and pulling the trigger!...";
            } else {
                 wordChoice = "You're Safe!!";
            }
        }

        return(<div>
            <p>{wordChoice}</p>
            <button onClick={this.handleClick} >Pull the trigger!</button>
        </div>)
    }
}