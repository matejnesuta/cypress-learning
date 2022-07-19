const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.automationpractice.com',
    setupNodeEvents(on, config) {
      // implement node event listeners here
      
    },
    chromeWebSecurity: false,
    data: {
        login:"standard_user",
        password:"secret_sauce",
    }
  },
});
