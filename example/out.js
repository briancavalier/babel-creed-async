'use strict';

var _creed = require('creed');

// concatFiles :: String -> Promise Error String

var concatFiles = _creed.coroutine(function* (dir) {
    var readUtf8P = pipe(joinPath(dir), readFileP('utf8'));

    var index = yield readUtf8P('index.txt');
    var results = yield (0, _creed.all)(index.match(/^.*(?=\n)/gm).map(readUtf8P));
    return results.join('');
});

var _fs = require('fs');

var _path = require('path');

// joinPath :: String -> String -> String
var joinPath = function joinPath(init) {
    return function (tail) {
        return (0, _path.join)(init, tail);
    };
};

// readFileP :: String -> String -> Promise Error Buffer
var readFileP = function readFileP(encoding) {
    return function (file) {
        return (0, _creed.runNode)(_fs.readFile, file, { encoding: encoding });
    };
};

// pipe :: (a -> b) -> (b -> c) -> (a -> c)
var pipe = function pipe(f, g) {
    return function (x) {
        return g(f(x));
    };
};

var main = function main(process) {
    return concatFiles(process.argv[2]).then(function (s) {
        return process.stdout.write(s);
    });
};

main(process);
