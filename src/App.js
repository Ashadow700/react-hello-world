import logo from './logo.svg';
import './App.css';
import ConditionalRender from "./components/ConditionalRender";
import PersonList from "./components/personList/PersonList";
import {StyledTextOne} from "./components/styledText/StyledText.js"
import EventHandle from "./components/eventHandle/eventHandle";
import {ZoomShip} from "./components/greet/greet";
import Terminator from "./components/terminator/terminator";
import Vader from "./components/Vader/vader";
import Counter from "./components/counter/counter";
import Square from "./components/Square/Square";
import React from "react";
import MySocket from "./components/websocket/MySocket"

// const commandLineArgs = require('command-line-args')

function App() {



    //
    const callAlertToo = (pingValue) => {
        console.log(pingValue)
        console.log("process.env.NODE_ENV", process.env.NODE_ENV)
        //
        console.log("process = ", process);


        // const args = commandLineArgs()

        // console.log("args = ", args)

        let urlFail = "http://localhost:5000/environmensible"
        let urlWork = "http://localhost:5000/environmentAccessible"



    }

    function callAlert() {
        console.log("Ping from App! =)")
    }


    // function testHttp() {
    //     // let url = "http://localhost:5000" + "/game/updateActivePieceGoal/" + gameId
    //
    //     let url = "http://localhost:5000/tea/tea"
    //     get(url)
    //         .then(response => console.log(response.status))
    // }

    function get(url) {
        return fetch(url)
    }



    return (
      <div className="App">
          <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <ConditionalRender/>
              <PersonList/>

            <EventHandle meguchan={"EXPROSIAN"}/>
            {/*<Lightsaber passedMethod={callAlert}/>*/}
            <ZoomShip callAlertToo={callAlertToo} passedString={"THIS SHOULD NOT BE LEGAL!!!!"}/>

            {/*<Vader force="I, too, do ineed feel something..."></Vader>*/}
            {/*<HelloAnikin></HelloAnikin>*/}
            {/*<Underestimate></Underestimate>*/}
            {/*<ChoosenOne adjective="drunken"/>*/}
            {/*<ChoosenOne adjective="pink"/>*/}

            <Terminator>
              <div>
                Oh, I will... yeeesss.....
              </div>
            </Terminator>
            <Vader force="I feel something..."/>
            <Counter startingValue={3} secondValue={8}/>

            <div className={"squares"}>
                <Square text="1"/>
                <Square text="2"/>
                <Square text="3"/>
            </div>
            <div>
                this is some text outside the fragment
                <React.Fragment>
                    This is some more text in a fragment
                </React.Fragment>
            </div>
              <MySocket/>


      </header>
    </div>
  );

}

export default App;
