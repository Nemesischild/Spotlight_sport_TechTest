Cucumber - Tech test Eaxmple using wdio

## Requirements

- Node version 8 or higher
- A preconfigured Selenium Grid, preinstalled browser driver or cloud provider account

Also this project doesn't cover setting up a proper test environment. You need to download specific browser driver yourself and run the prior starting tests or use a cloud provider like [SauceLabs](https://saucelabs.com/).

## start

Choose one of the following options:

1. Clone the git repo — `git clone https://github.com/Nemesischild/Spotlight_sport_TechTest.git

2. Ensure 'yarn' is installed - Although this project works fine with NPM I recommend to use Yarn (>= 1.0.0) instead,  due to its speed & solid dependency locking mechanism. To keep things simple I used yarn, but feel free to replace this with NPM if that is what you are using.

3. Clean the project (Optional):
-- Run `yarn run clean`

4. Install the dependencies (`yarn install`)

# How to run the test

Start the local web server:

```sh
$ yarn run test
```

To run your tests just call the [WDIO runner](http://webdriver.io/guide/testrunner/gettingstarted.html):

```sh
$ yarn run wdio
```

_please note_ The WDIO runner uses the configuration file `wdio.conf.js` by default.
