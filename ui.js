module.exports = api => {
  api.describeTask({
    match: /vue-cli-service testcafe/,
    description: 'org.vue.testcafe.tasks.test.description',
    link: 'https://github.com/1600133971/vue-cli-plugin-e2e-st-testcafe#injected-commands',
    prompts: [
      {
        name: 'skipuncaughterrors',
        type: 'confirm',
        default: false,
        description: 'org.vue.testcafe.tasks.test.skipuncaughterrors'
      }
    ],
    onBeforeRun: ({ answers, args }) => {
      if (answers.skipuncaughterrors) args.push('--skip-uncaught-errors')
    }
  })
}
