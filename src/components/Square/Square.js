import './Square.css'

const {Component} = require("react");


class Square extends Component {

    constructor(props) {
        super(props);
        this.state = {
            text: props.text
        }
    }

    render() {
        return (
            <div className={"square"}>
                {this.state.text}
            </div>

        )
    }

    componentDidMount() {
        console.log("After mounting the component")
    }

}

export default Square

// import React, {Component} from "react";
//
// class Vader extends Component {
//
//     constructor(props) {
//         super(props);
//         this.state = {
//             force: props.force
//         }
//     }
//
//     render() {
//         return (
//             <div>
//                 <div onClick={ ()=>this.handleClick() }>
//                     {this.state.force}
//                 </div>
//             </div>
//         )
//     }
//
//     handleClick() {
//         console.log("Clicked!")
//         this.setState({
//                 force: "...in the force..."
//             },
//             () => {
//                 console.log("inside Setstate", this.state.force)
//             }
//         )
//         console.log("outside setState", this.state.force)
//     }
// }
//
// export default Vader;
