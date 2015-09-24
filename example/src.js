'use strict';

import { runNode, all } from 'creed';
import { readFile } from 'fs';
import { join } from 'path';

// joinPath :: String -> String -> String
const joinPath = init => tail => join(init, tail);

// readFileP :: String -> String -> Promise Error Buffer
const readFileP = encoding => file => runNode(readFile, file, {encoding});

// pipe :: (a -> b) -> (b -> c) -> (a -> c)
const pipe = (f, g) => x => g(f(x));

// concatFiles :: String -> Promise Error String
async function concatFiles (dir) {
    const readUtf8P = pipe(joinPath(dir), readFileP('utf8'));

    const index = await readUtf8P('index.txt');
    const results = await all(index.match(/^.*(?=\n)/gm).map(readUtf8P));
    return results.join('');
}

const main = process => concatFiles(process.argv[2])
    .then(s => process.stdout.write(s));

main(process);
