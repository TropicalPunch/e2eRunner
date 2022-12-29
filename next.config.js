// next.config.js
const withCSS = require("@zeit/next-css");
const path = require("path");

module.exports = withCSS({
  serverRuntimeConfig: {
    PROJECT_ROOT: __dirname,
    TEST_PATH: path.join(__dirname, "tests"),
    // this is a hack due to next js dev env (https://github.com/vercel/next.js/discussions/14341)
    TEST_CONFIG_PATH: path.join(__dirname, "utils/playwright-runner/playwright.config.ts"),
  }
});

