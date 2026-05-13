const EventEmitter = require('events');


const myEmitter = new EventEmitter();


myEmitter.on('start', () => {
    console.log('Start event triggered!');
});

myEmitter.on('data', (data) => {
    console.log('Data event received:', data);
});

myEmitter.on('end', () => {
    console.log('End event triggered. Exiting main loop.');
});


function mainLoop() {
    console.log('Main loop running...');

   
    setTimeout(() => myEmitter.emit('start'), 1000);
    setTimeout(() => myEmitter.emit('data', { value: 42 }), 2000);
    setTimeout(() => myEmitter.emit('data', { value: 99 }), 3000);
    setTimeout(() => myEmitter.emit('end'), 4000);
}

// Run the main loop
mainLoop();