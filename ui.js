module.exports = api => {
  api.describeTask({
    match: /vue-cli-service e2e/,
    description: 'org.vue.testcafe.tasks.test.description',
    link: 'https://github.com/1600133971/vue-cli-plugin-e2e-st-testcafe#injected-commands',
    prompts: [
      {
        name: 'skip-uncaught-errors',
        type: 'confirm',
        default: false,
        description: 'org.vue.testcafe.tasks.test.skipuncaughterrors'
      }
    ],
    onBeforeRun: ({ answers, args }) => {
      if (answers.watch) args.push('--skip-uncaught-errors')
    }
  })
}
