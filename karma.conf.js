// karma-coverage-istanbul-reporter configuration
// https://www.npmjs.com/package/karma-coverage-istanbul-reporter

const thresholds = {
  emitWarning: false,
  global: {
    statements: 80,
    lines: 80,
    branches: 80,
    functions: 80,
  },
  each: {
    statements: 50,
    lines: 50,
    branches: 50,
    functions: 50,
  },
};

// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage-istanbul-reporter'),
      require('@angular-devkit/build-angular/plugins/karma'),
    ],
    client: {
      clearContext: false,
    },
    coverageIstanbulReporter: {
      reports: ['html', 'lcovonly', 'text-summary', 'json'],
      fixWebpackSourcePaths: true,
      dir: require('path').join('dist/coverage'),
      thresholds: config.buildWebpack.options.watch ? {} : thresholds,
    },
    reporters: ['progress', 'coverage-istanbul'],
    port: 9876,
    colors: true,
    autoWatch: true,
    customLaunchers: {
      ChromeHeadless: {
        base: 'Chrome',
        flags: [
          '--headless',
          '--disable-gpu',
          '--no-sandbox',
          '--remote-debugging-port=9222',
        ],
      },
      ChromeDebugging: {
        base: 'Chrome',
        flags: ['--remote-debugging-port=9333'],
      },
    },
    browsers: ['ChromeHeadless'],
    logLevel: config.LOG_INFO,
    singleRun: true,
    restartOnFileChange: true
  });
};
