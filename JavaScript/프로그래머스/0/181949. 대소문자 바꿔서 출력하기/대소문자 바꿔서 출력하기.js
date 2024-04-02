const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', function (line) {
    console.log(
        [...line]
        .map(v => v === v.toUpperCase()? v.toLowerCase() : v.toUpperCase())
        .join("")
    );
});