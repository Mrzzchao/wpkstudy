/**
 * Created by lichun on 2017/2/10.
 */
const msgHandler = [];
let socket = null;
const createConnect = ()=>{
    let sock = new WebSocket('ws://192.168.41.76:6070/jrttcrazybet');
    sock.onopen = function() {
        console.log('open');
    };
    sock.onmessage = function(e) {
        msgHandler.forEach((fn)=>{
            fn(e.data)
        });
        console.log('message:', e.data);
    };
    sock.onclose = function() {
        console.log('close');
    };
    sock.onerror = function (e) {
        console.error(e);
        socket = createConnect();
    };
    return sock
};
socket = createConnect();

export const reconnect = ()=>{
    socket = createConnect();
};

export const sendMsg = (msg) => {
    socket.send(msg)
};

export const onMsg = (fn)=>{
    if(!~msgHandler.indexOf(fn)){
        msgHandler.push(fn)
    }
};


