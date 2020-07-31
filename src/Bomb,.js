import React from 'react'

export class Bomb extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            count: 0
        }
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            const newCount = this.state.count + 1;
            this.setState({
                count: newCount
            })
        },1000)
    }

   

    componentWillUnmount(){
        clearInterval(this.interval)
    }

    render(){
        let timer;
        if(this.state.count >= 8){
            clearInterval(this.interval);
            return timer = "Boom";
            
        } else {
            if (this.state.count % 2 === 0){
                return timer = "Tick"
            } else if (this.state.count % 2 !== 0){
                return timer = "Tock"
            }
        }

        return (<div>
            <p>{timer}</p>
        </div>)
    }
}