/* global assert */
var sinon = require('sinon'),
    expect = require('chai').expect;

var repl = require('../lib/index_implementation.js'),
    target,

    mockNet = {
        createServer: function mockCreateServer() {
            return mockNet;
        },
        listen: function mockListen() {}
    },

    mockRepl = {
        start: function mockReplStart() {
            return mockReplInstance;
        }
    },
    mockReplInstance = {
        on: function mockReplInstanceOn() {

        },
        context: {

        }
    },

    mockFs = {
        start: function mockReplStart() {}
    },

    mockSocket = {
        end: function mockEnd() {

        }
    },
    mockRequire =  {
    };

describe('repl server', function() {
    beforeEach(function() {
        target = repl(mockRequire, mockNet, mockRepl, mockFs, 'testpid');
    });

    it('can connect', function() {
        sinon.spy(mockNet, "createServer");
        sinon.spy(mockNet, "listen");
        target.start();
        expect(mockNet.createServer.getCall(0).args[0]).to.equal(target.startRepl);
        expect(mockNet.listen.getCall(0).args[0]).to.equal('/tmp/node-repl-sock-testpid');
    });

    it('creates a REPL server', function() {
        sinon.spy(mockReplInstance, "on");
        sinon.spy(mockRepl, "start");
        target.startRepl(mockSocket);
        expect(mockReplInstance.on.getCall(0).args[0]).to.equal('exit');
        var args = mockRepl.start.getCall(0).args[0];
        expect(args.prompt).to.equal("socket /tmp/node-repl-sock-testpid > ");
        expect(args.input).to.equal(mockSocket);
        expect(args.output).to.equal(mockSocket);
        expect(args.terminal).to.equal(true);
        expect(args.useGlobal).to.equal(false);
    });
});
