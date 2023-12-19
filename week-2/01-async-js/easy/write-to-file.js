const fs = require('fs');

fs.readFile("txtspaced.txt", "utf-8", (err, data) => {

    if (err) {
        return
    } else {
        writeToFile(data)
    }


})

const writeToFile = (data) => {
    fs.writeFile("txtspaced.txt", data, (err) => {
        if (err) return;
    })
}