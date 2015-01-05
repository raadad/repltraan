
## REPLTRAAN

Generic node.js repl with included client
Named after Teletraan, the semi-sentient computer that runs the Autobots' spaceship in the transformers universe.

Instances can be connected to through a REPL interface.

### Usage

Just add require('repltraan').start(), and any node.js will be connectable.

To connect to the repl, a REPL client is provided in ./bin/repl-client.js

When running the REPL client, a socket connection to the running instance must be provided, typically they can be found in the /tmp directory of that server with the following naming node-repl-sock-{pid of node process}

eg ./bin/repltraan.js /tmp/node-repl-sock-10973
