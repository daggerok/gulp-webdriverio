gulp-babel-es6-livereload [![build](https://travis-ci.org/daggerok/gulp-babel-es6-livereload.svg?branch=master)](https://travis-ci.org/daggerok/gulp-babel-es6-livereload)
=========================

fully automated e2e testing written on es6, using node, gulp, webdriverio and selenium

supported browsers:

- phantomjs

- chrome


**Note 1**

*before run test, all java processes will kill (to automate rerun selenium if errors was occurs in previous steps), so to prevend this remove 'pretest' script from package.json*

```shell
npm test
```

**Note 2**

*this probably won't work on windows family systems out of the box (I didn't test it), because of specific UNIX scripts in package.json, like killall java. just run commands one-by-one if so*

links:

- http://webdriver.io/guide/plugins/gulp-webdriver.html

- https://github.com/senchalabs/connect

- http://gulpjs.com

- https://babeljs.io

- https://www.npmjs.com/package/phantomjs-prebuilt
