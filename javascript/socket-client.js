(function () {
    const net = require('net');
    const socket = net.createConnection({ host: '127.0.0.1', port: 3000 }, () => {
        console.log('createConnection success');
    });
    socket.connect();
    socket.emit('events', { test: 'test' })
    socket.addListener('events', event => {
        console.log('events', event);
    })
    // socket('write')


    // const socket = new WebSocket('http://localhost:3000');

    // socket.onopen = event => {
    //     socket.send('hello socket');
    //     socket.onmessage = event => {
    //         console.log('clent recevied a message', event);
    //     }
    //     socket.onerror = event => {
    //         console.error('something error', event);
    //     }
    //     socket.onclose = event => {
    //         console.warn('socket closed', event);
    //     }
    // }

})()
