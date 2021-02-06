import { Given } from 'cucumber';

import checkTitle from '../support/check/checkTitle';
import openWebsite from '../support/action/openWebsite';


Given(
    /^I open the (url|site) "([^"]*)?"$/,
    openWebsite
);

Given(
    /^the title is( not)* "([^"]*)?"$/,
    checkTitle
);

