module.exports = (api, options) => {
  const chalk = require("chalk");
  const { info } = require("@vue/cli-shared-utils");

  function removeArg(rawArgs, arg) {
    const matchRE = new RegExp(`^--${arg}`);
    const equalRE = new RegExp(`^--${arg}=`);
    const i = rawArgs.findIndex(arg => matchRE.test(arg));
    if (i > -1) {
      rawArgs.splice(i, equalRE.test(rawArgs[i]) ? 1 : 2);
    }
  }

  function run(args, rawArgs) {
    removeArg(rawArgs, "mode");
    removeArg(rawArgs, "browser");
    removeArg(rawArgs, "file");
    removeArg(rawArgs, "url");

    const serverPromise = args.url
      ? Promise.resolve({ url: args.url })
      : api.service.run("serve", { mode: args.mode || "production" });

    return serverPromise.then(({ url, server }) => {
      info(`Starting e2e tests...`);
      //info(`args: ` + JSON.stringify(args));
      //info(`rawArgs: ` + rawArgs);
      const testCafeArgs = [
        args.browser,
        args.file,
        `--hostname ${url}`,
        ...rawArgs
      ].filter(v => v);
      info(`testcafe ` + testCafeArgs.join(" "));
      const execa = require("execa");
      const testCafeBinPath = require.resolve("testcafe/bin/testcafe");
      const runner = execa(testCafeBinPath, testCafeArgs, { stdio: "inherit" });
      if (server) {
        runner.on("exit", () => server.close());
        runner.on("error", () => server.close());
      }

      if (process.env.VUE_CLI_TEST) {
        runner.on("exit", code => {
          process.exit(code);
        });
      }

      return runner;
    });
  }

  const commandOptions = {
    "--mode": "specify the mode the dev server should run in. (default: production)",
    "--url":  "run e2e tests against given url instead of auto-starting dev server",
    "--file": "runs a specific spec file or directory of spec files"
  };

  api.registerCommand(
    "testcafe",
    {
      description: "run e2e tests with TestCafe",
      usage: "vue-cli-service testcafe [options]",
      options: Object.assign(
        {
          // "--arg": "insert extra argument here"
        },
        commandOptions
      ),
      details:
        `All TestCafe CLI options are also supported:\n` +
        chalk.yellow(
          `https://devexpress.github.io/testcafe/documentation/using-testcafe/command-line-interface.html`
        )
    },
    (args, rawArgs) => run(args, rawArgs)
  );

  function help(args, rawArgs) {
    const execa = require("execa");
    const testcafeBinPath = require.resolve("testcafe/bin/testcafe");
    let runner = execa(testcafeBinPath, [`--list-browsers`], { stdio: "inherit" });
    runner.on("exit", () => {
      info(`testcafe --list-browsers`);
      runner = execa(testcafeBinPath, [`--version`], { stdio: "inherit" });
      runner.on("exit", () => {
        info(`testcafe --version`);
        runner = execa(testcafeBinPath, [`--help`], { stdio: "inherit" });
        runner.on("exit", () => {
          info(`testcafe --help`);
        });
        runner.on("error", () => {});
      });
      runner.on("error", () => {});
    });
    runner.on("error", () => {});

    if (process.env.VUE_CLI_TEST) {
      runner.on("exit", code => {
        process.exit(code);
      });
    }

    return runner;
  }

  api.registerCommand(
    "testcafe:help",
    {
      description: "display TestCafe help info.",
      usage: "vue-cli-service testcafe:help",
      options: Object.assign({}),
      details:
        `All TestCafe CLI options are also supported:\n` +
        chalk.yellow(
          `https://devexpress.github.io/testcafe/documentation/using-testcafe/command-line-interface.html`
        )
    },
    (args, rawArgs) => help(args, rawArgs)
  );
};
