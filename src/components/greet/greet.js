import React from "react";

export function HelloAnikin() {
    return <div>Hi there Anikin... I have the high ground</div>
}

export function ChoosenOne(props) {
    return <div>You were the {props.adjective} one!</div>
}

export function Lightsaber(props) {
    return <button onClick={props.passedMethod}>Lightsasber buttonnzz!</button>
}

export function ZoomShip({callAlertToo, passedString}) {
    return <button onClick={ () => callAlertToo(passedString) }>  ZOOOOOOMShiff! </button>
}


export const Underestimate = () => <div>You underestimate my power</div>
