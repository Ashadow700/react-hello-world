import SockJS from "sockjs-client"
import { Stomp } from "@stomp/stompjs"

const StompJs = require('@stomp/stompjs');

function MySocket() {

    // console.log("Setting up MySocket")
    //
    //
    // const stompConfig = {
    //
    //     // Broker URL, should start with ws:// or wss:// - adjust for your broker setup
    //     brokerURL: "ws://localhost:8080/stomp-endpoint",
    //
    //     reconnectDelay: 5000,
    //     heartbeatIncoming: 4000,
    //     heartbeatOutgoing: 4000
    //
    // };
    //
    // let stompClient = new StompJs.Client(stompConfig);
    //
    // stompClient.onConnect = function (frame) {
    //     // The return object has a method called `unsubscribe`
    //     console.log("setup subscription from StompJsClient")
    //
    //
    //     stompClient.subscribe('/topic/greetings', function (message) {
    //         console.log(message)
    //     });
    // }
    //
    // stompClient.activate();


    const url = 'http://localhost:8080/stomp-endpoint'

    var socket = new SockJS(url);

    var stompClient = Stomp.over(socket);

    var headers = {
        'login': 'mylogin',
        'passcode': 'mypasscode',
        // additional header
        'client-id': 'my-client-id'
    };

    stompClient.connectHeaders = headers

    stompClient.connect(
        headers,
        (frame) => {
            console.log("connected!!")
        }
    )


    return (
        <div>
            The Websocket and stuff
        </div>
    )

}

export default MySocket
