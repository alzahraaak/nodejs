const Emitter = require('events');

const emitter = new Emitter();

emitter.on ('message',(data ,second) =>{
    console.log (data);
    console.log(second);
})

const MSG = "masaj"
emitter.emit('message',MSG,222)


emitter.removeAllListeners()
