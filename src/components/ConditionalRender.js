import React, {Component} from 'react';

class ConditionalRender extends Component {

    constructor() {
        super();
        this.state = {
            condition: false
        }
    }

    createIfElse = () => {
    if(this.state.condition) {
        return <div>returned from method!! Also state is true!!</div>
    } else {
        return <div>returned from method!! Though the state is false...</div>
    }
}

    render() {
        return (

            <div>
                <div>
                    { this.state.condition && <div>State is true =)</div> }
                    { !this.state.condition && <div>State is false =(</div> }
                </div>

                <div> {this.createIfElse()} </div>

            </div>

        )
    }
}

// function createIfElse() {
//     if(this.state.condition) {
//         return <div>State is true =)</div>
//     } else {
//         return <div>State is false =( </div>
//     }
// }



export default ConditionalRender
