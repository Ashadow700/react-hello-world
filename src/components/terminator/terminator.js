import React, {Component} from "react";

class Terminator extends Component {

    render() {
        return (
            <div>
                <div>I'll be back</div>
                { this.props.children }
                { this.props.children }
            </div>
        )
    }
}

export default Terminator;
