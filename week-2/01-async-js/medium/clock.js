// Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
// clock that shows you the current machine time?

// Can you make it so that it updates every second, and shows time in the following formats - 

//  - HH:MM::SS (Eg. 13:45:23)

//  - HH:MM::SS AM/PM (Eg 01:45:23 PM)
const readline = require("readline")
const starTheColck = () => {
   
    date = new Date().toLocaleTimeString();
    return date
     

}
 
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
  
    const interval = setInterval(() => {
      const time = starTheColck();
      process.stdout.write(`\r${time}`);
    }, 1000);
  
    rl.on('line', (input) => {
      if (input === '') {
        clearInterval(interval);
        rl.close();
      }
    });
  