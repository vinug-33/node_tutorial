// Node uses CommonJS ==> Everything is modules (Bydefault)
// Modules ==> shares minimum (encapsulated)

const names = require('./name')
const sayHi = require('./utils')

sayHi('Susan')
sayHi(names.john)
sayHi(names.peter)
console.log("************************************************************\n");

//Alternative way -2
const data = require('./alternative_way_to_export_module')
console.log(data);
console.log("************************************************************\n");

//Alternative way -3
require('./alternate_way2')
console.log("************************************************************\n");