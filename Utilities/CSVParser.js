const fs = require("fs");

function main() {
  const argv = process.argv;
  const argc = argv.length;

  if (!validateArgs(argc)) {
    return;
  }

  const csvData = fs.readFileSync(argv[2]);

  const parsedData = csvParser(csvData);

  fs.writeFileSync(
    "outputCSV.json",
    JSON.stringify(parsedData, null, 4),
    function (err) {
      if (err) {
        console.log(err);
      }
    },
  );
}

function validateArgs(argc) {
  if (argc !== 3) {
    console.log("usage: <path to csv file>\nExample: CSVParser data.csv");
    return false;
  } else {
    return true;
  }
}

function csvParser(csvString) {
  //Just incase we recieve a buffer instead of a string
  csvString = csvString.toString();

  if (csvString.length === 0) {
    return [];
  }

  // Get all the lines of the file
  const lines = csvString.split("\n");
  // Get the headers for the data
  const headers = lines[0].split(",");
  // declare an array for our data to live
  const data = [];

  //split the data up by line, seperated by commas
  for (let i = 1; i < lines.length; i++) {
    data.push(lines[i].split(","));
  }

  const returnArray = { data: [] };

  for (let x = 0; x < data.length - 1; x++) {
    const tempObject = {};
    for (let z = 0; z < data[x].length; z++) {
      tempObject[headers[z]] = data[x][z];
    }
    returnArray.data.push(tempObject);
  }
  return returnArray;
}
main();
