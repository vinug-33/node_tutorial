const { readFileSync, writeFileSync } = require('fs')

const f1 = readFileSync('./Folder/Subfolder/first.txt', 'utf-8')
const f2 = readFileSync('./Folder/Subfolder/second.txt', 'utf-8')
console.log(f1, f2);

writeFileSync( './Folder/Subfolder/writeFile.txt', `Here is the result: ${f1}, ${f2}`)