if (!process.argv[2]) {
    console.log("Please specify a socket to connect to.");
    process.exit();
}

var net = require('net'),
socket = net.connect(process.argv[2]);

process.stdin.pipe(socket);
process.stdin.on('data', function(buffer) {
    if (buffer.length === 1 && buffer[0] === 0x04) {
        process.stdin.emit('end');
        process.stdin.setRawMode(false);
        process.stdin.pause();
    }
});

process.stdin.on('end', function() {
    console.log('.exit');
    socket.destroy();
});

socket.pipe(process.stdout);

socket.on('connect', function() {
    console.log('Connected.');
    process.stdin.setRawMode(true);
});

socket.on('close', function close() {
    console.log('Disconnected.');
    socket.removeListener('close', close);
});
