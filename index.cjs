const colorIt= require('./digitsColoring.cjs').colorIt;
const readByChunks= require('./fileReader.cjs').readByChunks;
const threadToWrite= require('./fileReader.cjs').threadToWrite;
const threadWriteRead= require('./fileReader.cjs').threadWriteRead;

digs= process.argv.filter((val,index)=>index>1);
colorIt(digs);

readByChunks();
threadToWrite();
threadWriteRead();