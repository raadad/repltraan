module.exports = function(require, net, repl, fs, pid, filePath) {
    var self = this;

    function cacheDel(path) {
        delete require.cache[require.resolve('../../' + path)];
    }

    if (!filePath) filePath = "/tmp/node-repl-sock-" + pid;
    self.startRepl = function startRepl(socket) {
        var replConnection = repl.start({
            prompt: 'socket ' + filePath + ' > ',
            input: socket,
            output: socket,
            terminal: true,
            useGlobal: false
        });

        replConnection.on('exit', function() {
            socket.end();
        });

        replConnection.context.socket = socket;
        replConnection.context.cacheDel = cacheDel;

    };

    self.start = function start() {
        net.createServer(self.startRepl).listen(filePath);
    };

    return self;
};
