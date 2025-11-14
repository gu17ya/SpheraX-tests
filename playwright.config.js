// playwright.config.js

require("dotenv").config();

/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
  testDir: "./tests",
  testMatch: /.*\.(js|ts)/,
  use: {
    baseURL: process.env.SPHERAX_BASE_URL,
    headless: true,
    trace: "on-first-retry",
  },
  retries: 1,
  reporter: [["html", { outputFolder: "report" }]],
};

module.exports = config;
