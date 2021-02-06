import isEnabled from '../support/check/isEnabled';
import checkDateIsFuture from '../support/check/checkDateIsFuture';

const { Then } = require('cucumber');

Then(
    /^I expect that the date "([^"]*)?" is in the future$/,
    checkDateIsFuture
);

Then(
    /^the button "([^"]*)?" is displayed$/,
    isEnabled
)
