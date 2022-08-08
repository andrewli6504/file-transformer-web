// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular', 'karma-typescript'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage'),
      require('@angular-devkit/build-angular/plugins/karma'),	
      require('karma-sonarqube-unit-reporter'),	
      require('karma-typescript'),
    ],
    client: {
      jasmine: {
        random: false
        // you can add configuration options for Jasmine here
        // the possible options are listed at https://jasmine.github.io/api/edge/Configuration.html
        // for example, you can disable the random execution with `random: false`
        // or set a specific seed with `seed: 4321`
      },
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    preprocessors: {		
      "**/*.ts": ["karma-typescript"]		
    },		
    karmaTypescriptConfig: {		
      exclude: [ 		
        "node_modules"		
      ],		
      reports: {		
        "lcovonly": {		
          "directory": "coverage",		
          "filename": "lcov.info",		
          "subdirectory": "lcov"		
        } 		
      }		
    },	
    sonarQubeUnitReporter: {	
      sonarQubeVersion: 'LATEST',	
      outputFile: 'reports/ut_report.xml',	
      overrideTestDescription: true,	
      testPaths: ['./src'],	
      testFilePattern: '.spec.ts',	
      useBrowserName: false	
    },
    jasmineHtmlReporter: {
      suppressAll: true // removes the duplicated traces
    },
    coverageReporter: {
      dir: require('path').join(__dirname, 'coverage/apa-website-ui'),
      // dir: require('path').join(__dirname, 'coverage'),
      subdir: '.',
      reporters: [
        { type: 'html' },
        { type: 'text-summary' },	
        { type: 'lcovonly' }	
      ],	
      check: {	
        global: {	
          statements: 80,	
          branches: 55,	
          functions: 75,	
          lines: 80	
        }	
      },
      fixWebpackSourcePaths: true,
    },
    reporters: ['progress', 'kjhtml', 'sonarqubeUnit', 'karma-typescript'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    singleRun: true,
    restartOnFileChange: true,	
    browsers: ['ChromeHeadlessNoSandbox'],  	
    customLaunchers: {  	
      ChromeHeadlessNoSandbox: {  	
        base: 'ChromeHeadless', 	
        flags: ['--no-sandbox','--disable-setuid-sandbox']  	
      } 	
    },	
    captureTimeout: 21000000, 	
    browserDisconnectTolerance: 3,	
    browserNoActivityTimeout : 21000000
  });
};
