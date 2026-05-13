const EventEmitter = require('events');

const myEmitter = new EventEmitter();


myEmitter.on('start', () => {
    console.log('Start event triggered!');
});

myEmitter.on('data', (info) => {
    console.log('Data event received:', info);
});

myEmitter.on('end', () => {
    console.log('End event triggered!');
});


function mainLoop() {
    console.log('Main loop running...');

    setTimeout(() => myEmitter.emit('start'), 1000);        // Trigger 'start' after 1 sec
    setTimeout(() => myEmitter.emit('data', { value: 42 }), 2000);  // Trigger 'data'
    setTimeout(() => myEmitter.emit('data', { value: 99 }), 3000);  // Trigger another 'data'
    setTimeout(() => myEmitter.emit('end'), 4000);          // Trigger 'end' after 4 sec
}

// Run the main loop
mainLoop();