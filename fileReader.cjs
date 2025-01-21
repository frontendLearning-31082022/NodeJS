module.exports.readByChunks = readByChunks
module.exports.threadToWrite = threadToWrite
module.exports.threadWriteRead = threadWriteRead

function readByChunks() {
    const fs = require('fs');
    const readStream = fs.createReadStream('./recources/inputData/access_tmp.log.txt', 'utf8');
    readStream.on('data', (chunk) => {
        console.log(chunk);
    });
    // readStream.on('end', () => console.log('File reading finished'));
    readStream.on('error', () => console.log(err));
}

function threadToWrite() {
    const fs = require('fs');
    const log1 = '127.0.0.1 - - [30/Jan/2021:11:11:20 -0300] "POST /foo HTTP/1.1 200 0 "-" "curl/7.47.0"';
    const writeStream = fs.createWriteStream('./access.log', {
        flags: 'a',
        encoding: 'utf8'
    });
    writeStream.write('\n');
    writeStream.write(log1);
    // writeStream.end(() => console.log('File writing finished'));
}

function threadWriteRead() {
    const fs = require('fs');
    const readStream = new fs.ReadStream('./access.log', 'utf8');
    const { Transform } = require('stream');
    const transformStream = new Transform({
        transform(chunk, encoding, callback) {
            const transformedChunk = chunk.toString().replace(/127.0.0.1/g, '');
            this.push(transformedChunk);
            callback();
        }
    });
    readStream.pipe(transformStream).pipe(process.stdout);
}