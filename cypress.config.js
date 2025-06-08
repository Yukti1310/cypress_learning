const { defineConfig } = require("cypress");


module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'Cypress Learning Report',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },
  e2e: {
    baseUrl: 'https://www.amazon.in',
    specPattern: "cypress/e2e/**/*.cy.js",
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);

    },
  },
  watchForFileChanges: true,
  video: false
});
