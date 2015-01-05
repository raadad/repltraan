module.exports = require('./index_implementation.js')(
    require,
    require('net'),
    require('repl'),
    require('fs'),
    process.pid
    // filePath Optional//
);
