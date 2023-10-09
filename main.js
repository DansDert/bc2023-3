const fs = require('node:fs');
fs.readFile("./data.json", "utf8", (err, jsonstring) => {
    if (err) {
        console.log("File read failed", err);
        return;
    }
    const jsonData = JSON.parse(jsonstring);
    const necessaryData = jsonData.reduce((acc, item) => {
        if (item.txt === "Доходи, усього" || item.txt === "Витрати, усього") {
            acc.push(`${item.txt}: ${item.value}`);
        }
        return acc;
    }, []);
    const finalString = necessaryData.join('\n');
    fs.writeFile("output.txt", finalString, (err) => {
        if (err) {
            console.log("File write failed", err);
            return;
        }
    })
});