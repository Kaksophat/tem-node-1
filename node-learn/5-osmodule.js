const os = require('os');

const user = os.userInfo()

console.log(user);
//methode returns the system uptimes in seconds
console.log(`system ${os.uptime()} seconds`);

const currentos={
    name:os.type(),
    release:os.release(),
    totalmen:os.totalmem(),
    freemem:os.freemem(),
    data:os.version(),
    name1:os.hostname(),
    name2:os.machine(),
}
console.log(currentos);
