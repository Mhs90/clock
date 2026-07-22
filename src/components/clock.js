import { Component } from "react";

export default class Clock extends Component {
    constructor(props) {
        super(props)
        this.state = {
            time: new Date().toLocaleTimeString()
        }

        setInterval(this.tick.bind(this),1000)
    }

    render() {
    return <p>{this.state.time}</p>
    }

    tick(){
        this.setState({
            time : new Date().toLocaleTimeString()
        })
    }
    
}