const report = require('multiple-cucumber-html-reporter');
const fs = require("fs")

function getBrowserDetails() {
    const strigifyData = JSON.stringify(
      fs.readFileSync("./browserDetails.json", "utf-8")
    )
    const parsedData = JSON.parse(JSON.parse(strigifyData))
    return parsedData
  }
  const browserDetails = getBrowserDetails()

report.generate({
    jsonDir: "cypress/cucumber-json",  // ** Path of .json file **//
    reportPath: "./reports/cucumber-htmlreport.html",
    metadata: {
        browser: {
            name: "chrome",
            version: browserDetails.version
        },
        device: "Local test machine",
        platform: {
            name: "",
            version: "",
        },
    },
});