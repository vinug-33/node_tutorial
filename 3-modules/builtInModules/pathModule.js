const path = require('path')

//separator for current system
console.log(path.sep);

//pathname
const filepath = path.join('Folder', 'Subfolder', 'test.txt')
console.log(filepath)

//base
console.log(path.basename(filepath))

//Full path
console.log(path.resolve( __dirname, 'Folder', 'Subfolder', 'test.txt'));