const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://www.automationexercise.com",
    viewportWidth: 1440,
    viewportHeight: 900,
    setupNodeEvents(on, config) {
      
    },
  },
});
