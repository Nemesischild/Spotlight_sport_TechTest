import clickElement from '../support/action/clickElement';

const { When } = require('cucumber');

When(
    /^I (click|doubleclick) on the (link|button|element) "([^"]*)?"$/,
    clickElement
);
