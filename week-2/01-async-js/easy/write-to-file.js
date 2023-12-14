const fs = require('fs');

fs.readFile("txtspaced.txt", "utf-8", (err, data) => {
    let text
    if (err) {
        return
    } else {
        text = data.replace(/\s+/g, ' ');
        writeToFile(text)
    }


})

const writeToFile = (data) => {
    fs.writeFile("txtspaced.txt", data, (err) => {
        if (err) return;
    })
}