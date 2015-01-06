
## REPLtraan
Generic node.js REPL with included client which allows node instances to be connected to and modified \ inspected while they are running.

Named after Teletraan, the semi-sentient computer that runs the Autobots' spaceship in the transformers universe.


### Installation
    sudo npm install -g repltraan

### Usage

Add the following line to any node.js script.

    require('repltraan').start()

Then run:

    repltraan /tmp/node-repl-sock-{PID of node instance}

eg:

    repltraan /tmp/node-repl-sock-10973

## Running Tests

    npm install

    mocha test