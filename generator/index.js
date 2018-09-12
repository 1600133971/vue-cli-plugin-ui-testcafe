module.exports = (api, _, __, invoking) => {
  api.render('./template', {
    hasTS: api.hasPlugin('typescript')
  })

  api.extendPackage({
    devDependencies: {
    },
    scripts: {
      "testcafe": "vue-cli-service testcafe"
    }
  })

  if (api.hasPlugin('eslint')) {
    applyESLint(api)
  }

  if (api.hasPlugin('typescript')) {
    applyTS(api, invoking)
  }
}

const applyESLint = module.exports.applyESLint = api => {
  api.render(files => {
    files['tests/e2e/.eslintrc.js'] = api.genJSConfig({
      "plugins": [
        "testcafe"
      ],
      "extends": "plugin:testcafe/recommended"
    })
  })
}

const applyTS = module.exports.applyTS = (api, invoking) => {
  api.extendPackage({
    devDependencies: {
    }
  })
  // inject mocha/chai types to tsconfig.json
  if (invoking) {
    api.render(files => {
      const tsconfig = files['tsconfig.json']
      if (tsconfig) {
        const parsed = JSON.parse(tsconfig)
        const types = parsed.compilerOptions.types
        if (types) {
          if (!types.includes('mocha')) {
            types.push('mocha')
          }
          if (!types.includes('chai')) {
            types.push('chai')
          }
        }
        files['tsconfig.json'] = JSON.stringify(parsed, null, 2)
      }
    })
  }
}
