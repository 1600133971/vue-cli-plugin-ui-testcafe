# ☕️ vue-cli-plugin-ui-testcafe

> e2e-testcafe plugin(ui) for vue-cli (WIP)

This adds E2E testing support using [TestCafe](https://testcafe.devexpress.com/).

## Features

### Implemented
- Run TestCafe tests in headless chrome with `vue-cli-service testcafe`

### Upcoming
- Add eslint-plugin-testcafe
- Add testcafe-vue-selectors
- Run TestCafe tests in all browsers
- Plugin generator
  - Example test scaffold
  - Generate e2e commands for all installed browsers
- Options
  - Concurrency
  - Debug mode
  - Adjust timeout

## Injected Commands

- **`vue-cli-service testcafe`**

  run e2e tests headlessly with `testcafe "chrome:headless"`.

  Options:

  ```
  --url      run e2e tests against given url instead of auto-starting dev server
  -s, --spec runs a specific spec file or a directory of spec files
  ```

  Additionally, [all TestCafe CLI options for testcafe are also supported](https://devexpress.github.io/testcafe/documentation/using-testcafe/command-line-interface.html).

  This command automatically starts a server in production mode to run the e2e tests against. If you want to run the tests multiple times without having to restart the server every time, you can start the server with `vue-cli-service serve --mode production` in one terminal, and then run e2e tests against that server using the `--url` option.

## Configuration

We've pre-configured TestCafe to place most of the e2e testing related files under `<projectRoot>/tests/e2e`.

## Installing in an Already Created Project

``` sh
npm install -D vue-cli-plugin-ui-testcafe
```
