const os = require('os')

//fetching user info
const user = os.userInfo()
console.log(user)

//Fetching system uptime
console.log(`The System uptime is ${os.uptime()} seconds`);

const currentOs = {
    name : os.type(),
    release : os.release(),
    totalMem : os.totalmem(),
    freeMem : os.freemem()
}
console.log(currentOs);