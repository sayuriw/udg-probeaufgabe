const CSVToJSON = require("csvtojson");
const FileSystem = require("fs");


CSVToJSON()
    .fromFile("./Artikel.csv")
    .then((source) => {
    let jsonData = source
    let data =JSON.stringify(jsonData, null, 2)
    FileSystem.writeFileSync("./Artikel.json", data)
    
});
