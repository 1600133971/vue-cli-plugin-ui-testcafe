module.exports = (api, _, __, invoking) => {
  api.render('./template', {
    hasTS: api.hasPlugin('typescript'),
    hasCS: api.hasPlugin('coffeescript'),
    hasElement: api.hasPlugin('element-ui')
  })

  api.extendPackage({
    devDependencies: {
    },
    scripts: {
      "testcafe": "vue-cli-service testcafe --mode development --browser 'chrome:headless' --file ./tests/e2e/*.js --reporter st,st-json:./tests/e2e/st.json",
      "testcafe:help": "vue-cli-service testcafe:help"
    }
  })

  if (api.hasPlugin('eslint')) {
    applyESLint(api)
  }

  if (api.hasPlugin('typescript')) {
    applyTS(api, invoking)
  }

  if (api.hasPlugin('coffeescript')) {
    applyCS(api, invoking)
  }

  if (api.hasPlugin('element-ui')) {
    applyElement(api, invoking)
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
  // inject testcafe types to tsconfig.json
  if (invoking) {
    api.render(files => {
      const tsconfig = files['tsconfig.json']
      if (tsconfig) {
        const parsed = JSON.parse(tsconfig)
        const types = parsed.compilerOptions.types
        if (types) {
          if (!types.includes('testcafe')) {
            types.push('testcafe')
          }
        }
        files['tsconfig.json'] = JSON.stringify(parsed, null, 2)
      }
    })
  }
}

const applyCS = module.exports.applyCS = (api, invoking) => {
  api.extendPackage({
    devDependencies: {
    }
  })
  // inject testcafe types to tsconfig.json
  if (invoking) {
    api.render(files => {
    })
  }
}

const applyElement = module.exports.applyElement = (api, invoking) => {
  api.extendPackage({
    devDependencies: {
    }
  })
  // inject testcafe types to tsconfig.json
  if (invoking) {
    api.render(files => {
    })
  }
}
