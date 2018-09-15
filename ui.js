module.exports = api => {
  function addQuotes(text) {
    return '\\\"' + (text) + '\\\"';
  }

  api.describeConfig({
    id: 'org.vue.st.testcafe.configuration',
    name: 'TestCafe',
    description: 'org.vue.st.testcafe.config.description',
    link: 'https://github.com/1600133971/vue-cli-plugin-e2e-st-testcafe',
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
            name: '(unset)',
            value: '(unset)'
          }
        ],
        message: '--mode',
        description: 'org.vue.st.testcafe.tasks.mode.description',
        group: 'org.vue.st.testcafe.tasks.group.general'
      },
      {
        name: 'url',
        type: 'input',
        default: '',
        message: '--url/--hostname [name]',
        description: 'org.vue.st.testcafe.tasks.url.description',
        link: 'https://devexpress.github.io/testcafe/documentation/using-testcafe/command-line-interface.html#--hostname-name',
        group: 'org.vue.st.testcafe.tasks.group.general'
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
        message: '--browser',
        description: 'org.vue.st.testcafe.tasks.browser.description',
        link: 'https://devexpress.github.io/testcafe/documentation/using-testcafe/common-concepts/browsers/browser-support.html#locally-installed-browsers',
        group: 'org.vue.st.testcafe.tasks.group.recommended'
      },
      {
        name: 'custombrowser',
        type: 'input',
        default: '',
        description: 'org.vue.st.testcafe.tasks.custombrowser.description',
        link: 'https://devexpress.github.io/testcafe/documentation/using-testcafe/command-line-interface.html#local-browsers',
        group: 'org.vue.st.testcafe.tasks.group.recommended'
      },
      {
        name: 'file',
        type: 'input',
        default: './tests/e2e/*.js',
        message: '--file',
        description: 'org.vue.st.testcafe.tasks.file.description',
        link: 'https://devexpress.github.io/testcafe/documentation/using-testcafe/command-line-interface.html#file-pathglob-pattern',
        group: 'org.vue.st.testcafe.tasks.group.recommended'
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
            value: 'xunit'
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
        message: '-r [name[:file],[...]], --reporter [name[:file],[...]]',
        description: 'org.vue.st.testcafe.tasks.reporter.description',
        link: 'https://devexpress.github.io/testcafe/documentation/using-testcafe/common-concepts/reporters.html',
        group: 'org.vue.st.testcafe.tasks.group.recommended'
      },
      {
        name: 'customreporter',
        type: 'input',
        default: '',
        description: 'org.vue.st.testcafe.tasks.customreporter.description',
        link: 'https://devexpress.github.io/testcafe/documentation/using-testcafe/command-line-interface.html#-r-namefile---reporter-namefile',
        group: 'org.vue.st.testcafe.tasks.group.recommended'
      },
      {
        name: 'screenshots',
        type: 'input',
        default: '',
        message: '-s [path], --screenshots [path]',
        description: 'org.vue.st.testcafe.tasks.screenshots.description',
        link: 'https://devexpress.github.io/testcafe/documentation/using-testcafe/command-line-interface.html#-s-path---screenshots-path',
        group: 'org.vue.st.testcafe.tasks.group.secondary'
      },
      {
        name: 'screenshotsonfails',
        type: 'confirm',
        default: false,
        message: '-S, --screenshots-on-fails',
        description: 'org.vue.st.testcafe.tasks.screenshotsonfails.description',
        link: 'https://devexpress.github.io/testcafe/documentation/using-testcafe/command-line-interface.html#-s---screenshots-on-fails',
        group: 'org.vue.st.testcafe.tasks.group.secondary'
      },
      {
        name: 'screenshotpathpattern',
        type: 'input',
        default: '',
        message: '-p, --screenshot-path-pattern',
        description: 'org.vue.st.testcafe.tasks.screenshotpathpattern.description',
        link: 'https://devexpress.github.io/testcafe/documentation/using-testcafe/command-line-interface.html#-p---screenshot-path-pattern',
        group: 'org.vue.st.testcafe.tasks.group.secondary'
      },
      {
        name: 'quarantinemode',
        type: 'confirm',
        default: false,
        message: '-q, --quarantine-mode',
        description: 'org.vue.st.testcafe.tasks.quarantinemode.description',
        link: 'https://devexpress.github.io/testcafe/documentation/using-testcafe/command-line-interface.html#-q---quarantine-mode',
        group: 'org.vue.st.testcafe.tasks.group.secondary'
      },
      {
        name: 'skipjserrors',
        type: 'confirm',
        default: false,
        message: '-e, --skip-js-errors',
        description: 'org.vue.st.testcafe.tasks.skipjserrors.description',
        link: 'https://devexpress.github.io/testcafe/documentation/using-testcafe/command-line-interface.html#-e---skip-js-errors',
        group: 'org.vue.st.testcafe.tasks.group.secondary'
      },
      {
        name: 'skipuncaughterror',
        type: 'confirm',
        default: false,
        message: '-u, --skip-uncaught-errors',
        description: 'org.vue.st.testcafe.tasks.skipuncaughterror.description',
        link: 'https://devexpress.github.io/testcafe/documentation/using-testcafe/command-line-interface.html#-u---skip-uncaught-errors',
        group: 'org.vue.st.testcafe.tasks.group.secondary'
      },
      {
        name: 'test',
        type: 'input',
        default: '',
        message: '-t [name], --test [name]',
        description: 'org.vue.st.testcafe.tasks.test.description',
        link: 'https://devexpress.github.io/testcafe/documentation/using-testcafe/command-line-interface.html#-t-name---test-name',
        group: 'org.vue.st.testcafe.tasks.group.secondary'
      },
      {
        name: 'testgrep',
        type: 'input',
        default: '',
        message: '-T [pattern], --test-grep [pattern]',
        description: 'org.vue.st.testcafe.tasks.testgrep.description',
        link: 'https://devexpress.github.io/testcafe/documentation/using-testcafe/command-line-interface.html#-t-pattern---test-grep-pattern',
        group: 'org.vue.st.testcafe.tasks.group.secondary'
      },
      {
        name: 'fixture',
        type: 'input',
        default: '',
        message: '-f [name], --fixture [name]',
        description: 'org.vue.st.testcafe.tasks.fixture.description',
        link: 'https://devexpress.github.io/testcafe/documentation/using-testcafe/command-line-interface.html#-f-name---fixture-name',
        group: 'org.vue.st.testcafe.tasks.group.secondary'
      },
      {
        name: 'fixturegrep',
        type: 'input',
        default: '',
        message: '-F [pattern], --fixture-grep [pattern]',
        description: 'org.vue.st.testcafe.tasks.fixturegrep.description',
        link: 'https://devexpress.github.io/testcafe/documentation/using-testcafe/command-line-interface.html#-f-pattern---fixture-grep-pattern',
        group: 'org.vue.st.testcafe.tasks.group.secondary'
      },
      {
        name: 'app',
        type: 'input',
        default: '',
        message: '-a [command], --app [command]',
        description: 'org.vue.st.testcafe.tasks.app.description',
        link: 'https://devexpress.github.io/testcafe/documentation/using-testcafe/command-line-interface.html#-a-command---app-command',
        group: 'org.vue.st.testcafe.tasks.group.secondary'
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
        message: '-c [n], --concurrency [n]',
        description: 'org.vue.st.testcafe.tasks.concurrency.description',
        link: 'https://devexpress.github.io/testcafe/documentation/using-testcafe/command-line-interface.html#-c-n---concurrency-n',
        group: 'org.vue.st.testcafe.tasks.group.secondary'
      },
      {
        name: 'appinitdelay',
        type: 'input',
        default: '',
        message: '--app-init-delay [ms]',
        description: 'org.vue.st.testcafe.tasks.appinitdelay.description',
        link: 'https://devexpress.github.io/testcafe/documentation/using-testcafe/command-line-interface.html#--app-init-delay-ms',
        group: 'org.vue.st.testcafe.tasks.group.secondary'
      },
      {
        name: 'selectortimeout',
        type: 'input',
        default: '',
        message: '--selector-timeout [ms]',
        description: 'org.vue.st.testcafe.tasks.selectortimeout.description',
        link: 'https://devexpress.github.io/testcafe/documentation/using-testcafe/command-line-interface.html#--selector-timeout-ms',
        group: 'org.vue.st.testcafe.tasks.group.secondary'
      },
      {
        name: 'assertiontimeout',
        type: 'input',
        default: '',
        message: '--assertion-timeout [ms]',
        description: 'org.vue.st.testcafe.tasks.assertiontimeout.description',
        link: 'https://devexpress.github.io/testcafe/documentation/using-testcafe/command-line-interface.html#--assertion-timeout-ms',
        group: 'org.vue.st.testcafe.tasks.group.secondary'
      },
      {
        name: 'pageloadtimeout',
        type: 'input',
        default: '',
        message: '--page-load-timeout [ms]',
        description: 'org.vue.st.testcafe.tasks.pageloadtimeout.description',
        link: 'https://devexpress.github.io/testcafe/documentation/using-testcafe/command-line-interface.html#--page-load-timeout-ms',
        group: 'org.vue.st.testcafe.tasks.group.secondary'
      },
      {
        name: 'speed',
        type: 'input',
        default: '',
        message: '--speed [factor]',
        description: 'org.vue.st.testcafe.tasks.speed.description',
        link: 'https://devexpress.github.io/testcafe/documentation/using-testcafe/command-line-interface.html#--speed-factor',
        group: 'org.vue.st.testcafe.tasks.group.secondary'
      },
      {
        name: 'proxy',
        type: 'input',
        default: '',
        message: '--proxy [host]',
        description: 'org.vue.st.testcafe.tasks.proxy.description',
        link: 'https://devexpress.github.io/testcafe/documentation/using-testcafe/command-line-interface.html#--proxy-host',
        group: 'org.vue.st.testcafe.tasks.group.network'
      },
      {
        name: 'ssl',
        type: 'input',
        default: '',
        message: '--ssl [options]',
        description: 'org.vue.st.testcafe.tasks.ssl.description',
        link: 'https://devexpress.github.io/testcafe/documentation/using-testcafe/command-line-interface.html#--ssl-options',
        group: 'org.vue.st.testcafe.tasks.group.network'
      },
      {
        name: 'proxybypass',
        type: 'input',
        default: '',
        message: '--proxy-bypass [rules]',
        description: 'org.vue.st.testcafe.tasks.proxybypass.description',
        link: 'https://devexpress.github.io/testcafe/documentation/using-testcafe/command-line-interface.html#--proxy-bypass-rules',
        group: 'org.vue.st.testcafe.tasks.group.network'
      },
      {
        name: 'qrcode',
        type: 'confirm',
        default: false,
        message: '--qr-code',
        description: 'org.vue.st.testcafe.tasks.qrcode.description',
        link: 'https://devexpress.github.io/testcafe/documentation/using-testcafe/command-line-interface.html#--qr-code',
        group: 'org.vue.st.testcafe.tasks.group.network'
      },
      {
        name: 'debugonfail',
        type: 'confirm',
        default: false,
        message: '--debug-on-fail',
        description: 'org.vue.st.testcafe.tasks.debugonfail.description',
        link: 'https://devexpress.github.io/testcafe/documentation/using-testcafe/command-line-interface.html#--debug-on-fail',
        group: 'org.vue.st.testcafe.tasks.group.debug'
      },
      {
        name: 'dev',
        type: 'confirm',
        default: false,
        message: '--dev',
        description: 'org.vue.st.testcafe.tasks.dev.description',
        link: 'https://devexpress.github.io/testcafe/documentation/using-testcafe/command-line-interface.html#--dev',
        group: 'org.vue.st.testcafe.tasks.group.debug'
      }
    ],
    // 钩子
    // 任务运行之前立即执行
    onBeforeRun: ({ answers, args }) => {
      // answers: 配置界面获取参数
      // args: 参数整理输出
      if (answers.mode) args.push('--mode', answers.mode);
      args.push('--browser', addQuotes(answers.browser !== "custom" ? answers.browser : answers.custombrowser));
      if (answers.url) args.push('--url', answers.url);
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
      if (answers.concurrency !== '1') args.push('--concurrency', answers.concurrency);
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
    },
    // 任务运行之后立即执行
    onRun: async ({ args, child, cwd }) => {
      // child: Node 子进程
      // cwd: 进程所在目录
    },
    onExit: async ({ args, child, cwd, code, signal }) => {
      // code: 退出码
      // signal: 可能会被使用的杀进程信号
    }/*,
    // 额外的视图(仪表盘)
    // 默认情况下，这里是展示终端输出的 `output` 视图
    views: [
      {
        id: 'vue-st-testcafe-dashboard-client-addon',
        label: 'Dashboard',
        icon: 'dashboard',
        component: 'vue-st-testcafe-dashboard'
      }
    ],
    // 展示任务详情时默认选择的视图 (默认是 `output`)
    defaultView: 'vue-st-testcafe-dashboard-client-addon'*/
  })
}
