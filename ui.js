module.exports = api => {
  function addQuotes(text) {
    return '\\\"' + (text) + '\\\"';
  }

  api.describeConfig({
    id: 'org.vue.st.testcafe',
    name: 'Testcafe configuration',
    description: 'org.vue.st.testcafe.config.description',
    link: 'https://eslint.org',
    files: {
      // eslintrc.js
      eslint: {
        js: ['.eslintrc.js'],
        json: ['.eslintrc', '.eslintrc.json'],
        // 会从 `package.json` 读取
        package: 'eslintConfig'
      },
      // vue.config.js
      vue: {
        js: ['vue.config.js']
      }
    },
    onRead: ({ data, cwd }) => ({
      tabs: [
        {
          id: 'tab1',
          label: 'org.vue.st.testcafe.config.tab1.label',
          icon: 'settings',
          prompts: [
            // 提示符对象们
          ]
        },
        {
          id: 'tab2',
          label: 'org.vue.st.testcafe.config.tab2.label',
          icon: 'settings_applications',
          prompts: [
            // 提示符对象们
          ]
        }
      ]
    }),
    onWrite: ({ prompts, answers, data, files, cwd, api }) => {
      // ...
    }
  })

  api.describeTask({
    match: /vue-cli-service testcafe/,
    description: 'org.vue.st.testcafe.tasks.description',
    link: 'https://github.com/1600133971/vue-cli-plugin-e2e-st-testcafe#injected-commands',
    prompts: [
      {
        name: 'mode',
        type: 'list',
        default: 'development',
        choices: [
          {
            name: 'development',
            value: 'development'
          },
          {
            name: 'production',
            value: 'production'
          },
          {
            name: 'test',
            value: 'test'
          },
          {
            name: 'stage',
            value: 'stage'
          }
        ],
        description: 'org.vue.st.testcafe.tasks.mode.description'
      },
      {
        name: 'browser',
        type: 'list',
        default: 'chrome:headless',
        choices: [
          {
            name: 'chrome:headless',
            value: 'chrome:headless'
          },
          {
            name: 'chrome',
            value: 'chrome'
          },
          {
            name: 'firefox:headless',
            value: 'firefox:headless'
          },
          {
            name: 'firefox',
            value: 'firefox'
          },
          {
            name: 'chromium',
            value: 'chromium'
          },
          {
            name: 'chrome-canary',
            value: 'chrome-canary'
          },
          {
            name: 'ie',
            value: 'ie'
          },
          {
            name: 'edge',
            value: 'edge'
          },
          {
            name: 'opera',
            value: 'opera'
          },
          {
            name: 'safari',
            value: 'safari'
          },
          {
            name: 'all',
            value: 'all'
          },
          {
            name: 'custom',
            value: 'custom'
          }
        ],
        description: 'org.vue.st.testcafe.tasks.browser.description'
      },
      {
        name: 'custombrowser',
        type: 'input',
        default: '',
        description: 'org.vue.st.testcafe.tasks.custombrowser.description'
      },
      {
        name: 'file',
        type: 'input',
        default: './tests/e2e/*.js',
        description: 'org.vue.st.testcafe.tasks.file.description'
      },
      {
        name: 'reporter',
        type: 'list',
        default: 'spec',
        choices: [
          {
            name: 'spec',
            value: 'spec'
          },
          {
            name: 'list',
            value: 'list'
          },
          {
            name: 'minimal',
            value: 'minimal'
          },
          {
            name: 'xunit',
            value: 'xUnit'
          },
          {
            name: 'json',
            value: 'json'
          },
          {
            name: 'st',
            value: 'st'
          },
          {
            name: 'st-minimal',
            value: 'st-minimal'
          },
          {
            name: 'custom',
            value: 'custom'
          }
        ],
        description: 'org.vue.st.testcafe.tasks.reporter.description'
      },
      {
        name: 'customreporter',
        type: 'input',
        default: '',
        description: 'org.vue.st.testcafe.tasks.customreporter.description'
      },
      {
        name: 'screenshots',
        type: 'input',
        default: '',
        description: 'org.vue.st.testcafe.tasks.screenshots.description'
      },
      {
        name: 'screenshotsonfails',
        type: 'confirm',
        default: false,
        description: 'org.vue.st.testcafe.tasks.screenshotsonfails.description'
      },
      {
        name: 'screenshotpathpattern',
        type: 'input',
        default: '',
        description: 'org.vue.st.testcafe.tasks.screenshotpathpattern.description'
      },
      {
        name: 'quarantinemode',
        type: 'confirm',
        default: false,
        description: 'org.vue.st.testcafe.tasks.quarantinemode.description'
      },
      {
        name: 'skipjserrors',
        type: 'confirm',
        default: false,
        description: 'org.vue.st.testcafe.tasks.skipjserrors.description'
      },
      {
        name: 'skipuncaughterror',
        type: 'confirm',
        default: false,
        description: 'org.vue.st.testcafe.tasks.skipuncaughterror.description'
      },
      {
        name: 'test',
        type: 'input',
        default: '',
        description: 'org.vue.st.testcafe.tasks.test.description'
      },
      {
        name: 'testgrep',
        type: 'input',
        default: '',
        description: 'org.vue.st.testcafe.tasks.testgrep.description'
      },
      {
        name: 'fixture',
        type: 'input',
        default: '',
        description: 'org.vue.st.testcafe.tasks.fixture.description'
      },
      {
        name: 'fixturegrep',
        type: 'input',
        default: '',
        description: 'org.vue.st.testcafe.tasks.fixturegrep.description'
      },
      {
        name: 'app',
        type: 'input',
        default: '',
        description: 'org.vue.st.testcafe.tasks.app.description'
      },
      {
        name: 'concurrency',
        type: 'list',
        default: '1',
        choices: [
          {
            name: '1',
            value: '1'
          },
          {
            name: '2',
            value: '2'
          },
          {
            name: '3',
            value: '3'
          },
          {
            name: '4',
            value: '4'
          }
        ],
        description: 'org.vue.st.testcafe.tasks.concurrency.description'
      },
      {
        name: 'debugonfail',
        type: 'confirm',
        default: false,
        description: 'org.vue.st.testcafe.tasks.debugonfail.description'
      },
      {
        name: 'appinitdelay',
        type: 'input',
        default: '',
        description: 'org.vue.st.testcafe.tasks.appinitdelay.description'
      },
      {
        name: 'selectortimeout',
        type: 'input',
        default: '',
        description: 'org.vue.st.testcafe.tasks.selectortimeout.description'
      },
      {
        name: 'assertiontimeout',
        type: 'input',
        default: '',
        description: 'org.vue.st.testcafe.tasks.assertiontimeout.description'
      },
      {
        name: 'pageloadtimeout',
        type: 'input',
        default: '',
        description: 'org.vue.st.testcafe.tasks.pageloadtimeout.description'
      },
      {
        name: 'speed',
        type: 'input',
        default: '',
        description: 'org.vue.st.testcafe.tasks.speed.description'
      },
      {
        name: 'proxy',
        type: 'input',
        default: '',
        description: 'org.vue.st.testcafe.tasks.proxy.description'
      },
      {
        name: 'ssl',
        type: 'input',
        default: '',
        description: 'org.vue.st.testcafe.tasks.ssl.description'
      },
      {
        name: 'proxybypass',
        type: 'input',
        default: '',
        description: 'org.vue.st.testcafe.tasks.proxybypass.description'
      },
      {
        name: 'dev',
        type: 'confirm',
        default: false,
        description: 'org.vue.st.testcafe.tasks.dev.description'
      },
      {
        name: 'qrcode',
        type: 'confirm',
        default: false,
        description: 'org.vue.st.testcafe.tasks.qrcode.description'
      }
    ],
    onBeforeRun: ({ answers, args }) => {
      if (answers.mode) args.push('--mode', answers.mode);
      args.push('--browser', addQuotes(answers.browser !== "custom" ? answers.browser : answers.custombrowser));
      if (answers.file) args.push('--file', answers.file);
      args.push('--reporter', answers.reporter !== "custom" ? answers.reporter : answers.customreporter);
      if (answers.screenshots) args.push('--screenshots', answers.screenshots);
      if (answers.screenshotsonfails) args.push('--screenshots-on-fails');
      if (answers.screenshotpathpattern) args.push('--screenshot-path-pattern', answers.screenshotpathpattern);
      if (answers.quarantinemode) args.push('--quarantine-mode');
      if (answers.skipjserrors) args.push('--skip-js-errors');
      if (answers.skipuncaughterror) args.push('--skip-uncaught-errors');
      if (answers.test) args.push('--test', addQuotes(answers.test));
      if (answers.testgrep) args.push('--test-grep', addQuotes(answers.testgrep));
      if (answers.fixture) args.push('--fixture', addQuotes(answers.fixture));
      if (answers.fixturegrep) args.push('--fixture-grep', addQuotes(answers.fixturegrep));
      if (answers.app) args.push('--app', addQuotes(answers.app));
      if (answers.concurrency !== 1) args.push('--concurrency', answers.concurrency);
      if (answers.debugonfail) args.push('--debug-on-fail');
      if (answers.appinitdelay) args.push('--app-init-delay', answers.appinitdelay);
      if (answers.selectortimeout) args.push('--selector-timeout', answers.selectortimeout);
      if (answers.assertiontimeout) args.push('--assertion-timeout', answers.assertiontimeout);
      if (answers.pageloadtimeout) args.push('--page-load-timeout', answers.pageloadtimeout);
      if (answers.speed) args.push('--speed', answers.speed);
      if (answers.proxy) args.push('--proxy', answers.proxy);
      if (answers.ssl) args.push('--ssl', answers.ssl);
      if (answers.proxybypass) args.push('--proxy-bypass', answers.proxybypass);
      if (answers.dev) args.push('--dev');
      if (answers.qrcode) args.push('--qr-code');
    }
  })
}
