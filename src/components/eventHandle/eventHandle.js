import React, {Component} from "react";

class EventHandle extends Component {

    constructor({meguchan}) {
        super();
         this.state = {
             megumin: meguchan
         }
    }


    buttonHandler = () => {
        console.log("Button clicked!!! =D")
        console.log(this.state.megumin)
    }

    buttonHandlerDOS() {
        console.log("Button 2 clicked ^_^")
        console.log(this)
    }

    render() {
        return (
            <li>
                <button onClick={ this.buttonHandler }>A button for you to click =)</button>
                <button onClick={ () => this.buttonHandlerDOS() }>Another button! </button>
            </li>
        )
    }
}

export default EventHandle