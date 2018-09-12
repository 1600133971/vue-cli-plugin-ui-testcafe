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
        name: 'skipuncaughterror',
        type: 'confirm',
        default: false,
        description: 'org.vue.st.testcafe.tasks.skipuncaughterror.description'
      }
    ],
    onBeforeRun: ({ answers, args }) => {
      if (answers.mode) args.push('--mode', answers.mode);
      args.push('--browser', addQuotes(answers.browser !== "custom" ? answers.browser : answers.custombrowser));
      args.push('--reporter', answers.reporter !== "custom" ? answers.reporter : answers.customreporter);
      if (answers.file) args.push('--file', answers.file);
      if (answers.skipuncaughterror) args.push('--skip-uncaught-errors');
    }
  })
}
