const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    const [n] = line.split(' ');
    const str = !(+n % 2)? " is even" : " is odd";
    
    console.log(n + str);
});