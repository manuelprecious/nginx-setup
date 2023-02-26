const os = require('os');


// Info about current user
const user = os.userInfo()
console.log(user);

// method return the system uptime in seconds
const uptime = os.uptime();
console.log(`The System Uptime is ${uptime} seconds`);

// What is my OS.
const currentOS = {
    release: os.release(),
    totalMem: os.totalmem(),
    freememory: os.freemem()
}

console.log(currentOS);

