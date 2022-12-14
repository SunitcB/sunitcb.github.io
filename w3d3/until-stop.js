const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});
let sum = 0;

function getAns(){
    readline.question('Give me a number: ', number => {
        if(number === "stop"){
            console.log("The final sum is: " + sum);
            return readline.close();
        }
        sum += parseInt(number);
        getAns();
    });
}

getAns();