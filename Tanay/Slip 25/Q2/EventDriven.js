const EventEmitter = require('events');

const myEmitter = new EventEmitter();

myEmitter.on('start', () => {
    console.log('Start event triggered!');
});

myEmitter.on('process', (data) => {
    console.log('Process event received with data:', data);
});

myEmitter.on('end', () => {
    console.log('End event triggered!');
});

function mainLoop() {
    console.log('Main loop running...');


    setTimeout(() => myEmitter.emit('start'), 1000);           
    setTimeout(() => myEmitter.emit('process', { task: 1 }), 2000); 
    setTimeout(() => myEmitter.emit('process', { task: 2 }), 3000);
    setTimeout(() => myEmitter.emit('end'), 4000);            
}

// Start the main loop
mainLoop();