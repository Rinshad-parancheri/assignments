const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


function counter(num, delay, currentValue) {
    if (currentValue <= num) {
      setTimeout(() => {
        console.log(currentValue);
        counter(num, delay, currentValue + 1);
        if (currentValue === num) {
          rl.close();
        }
      }, delay);
    }
  }
  
rl.question("Enter your limit to count: ", (num) => {
    counter(Number(num), 1000, 1)

});
