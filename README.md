## Cucumber - SpotlightTech test Eaxmple using wdio

The core & structure of this project is based on : https://github.com/webdriverio/cucumber-boilerplate, which gave me the initial framework to work with and also supplied some pre-written helpers (support folder). This also allowed me to get up and running without having to completely re-write the wdio.config or the package.lock files. I have left references to the original author of this project in these files to ensure credit is given where it is due.

## Requirements

- Node version 8 or higher
- A preconfigured Selenium Grid, preinstalled browser driver or cloud provider account

Also this project doesn't cover setting up a proper test environment. You need to download specific browser driver yourself and run the prior starting tests or use a cloud provider like [SauceLabs](https://saucelabs.com/).

## start

1. Clone the git repo — `git clone https://github.com/Nemesischild/Spotlight_sport_TechTest.git

2. Ensure 'yarn' is installed - Although this project works fine with NPM I recommend to use Yarn (>= 1.0.0) instead,  due to its speed & solid dependency locking mechanism. To keep things simple I used yarn, but feel free to replace this with NPM if that is what you are using.

3. Clean the project:
-- Run `yarn run clean`

4. Install the dependencies (`yarn install`)

# How to run the test

Start the local web server:

```sh
$ yarn run test
```

To run the tests just call the [WDIO runner](http://webdriver.io/guide/testrunner/gettingstarted.html):

```sh
$ yarn run wdio
```

_please note_ The WDIO runner uses the configuration file `wdio.conf.js` by default.
