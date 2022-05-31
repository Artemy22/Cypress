const report = require('multiple-cucumber-html-reporter');

report.generate({
	jsonDir: './cypress/cucumber-json/',
	reportPath: './cypress/cucumber-report/',
	metadata:{
        browser: {
            name: 'chrome',
            version: '100+'
        },
        device: 'Local test machine',
        platform: {
            name: 'Wind10',
            version: '{version}'
        }
    }
});