
(function () {
    // const net = require('net');
    // const socket = net.createConnection({ host: '127.0.0.1', port: 3000 }, () => {
    //     console.log('createConnection success');
    // });
    // socket.connect();
    // socket.emit('events', { test: 'test' })
    // socket.addListener('events', event => {
    //     console.log('events', event);
    // })
    // socket('write');

    const io = require('socket.io-client');
    const socket = io('ws://localhost:3000');
    socket.on('connect', () => {
        // either with send()
        // socket.send('events');

        // or with emit() and custom event names
        socket.emit('events', 'Hello!', { 'mr': 'john' }, Uint8Array.from([1, 2, 3, 4]));
    });
    socket.on('event', (log) => {
        console.log('on welcome : welcome received renderer', log); // displayed
        // socket.emit('events')
        // socket.close();
        // socket.disconnect();
    });
    //'ws://localhost:3000'

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
