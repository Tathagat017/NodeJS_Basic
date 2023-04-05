//! INBUILT MODULES

// OS Inbuilt module

const OS = require("os");
console.log(OS.cpus()[0]);

console.log(OS.version());

console.log(OS.freemem());

console.log(OS.userInfo().username);
