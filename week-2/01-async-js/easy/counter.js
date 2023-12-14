const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter your limit to count: ", (num) => {
  count(Number(num));
});

function count(num) {
  let countValue = 0;

  const intervalId = setInterval(() => {
    console.log(countValue);
    countValue++;

    if (countValue > num) {
      clearInterval(intervalId);
      rl.close();
    }
  }, 1000); // Interval set to 1 second (1000 milliseconds)
}
