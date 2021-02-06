Feature: SpotLight Texch Test
    As a developer
    I want to be able to show I can run tests via wdio

    Background:
        Given I open the site "/"

    Scenario: Test the Cookies button appaeras
        Given the title is "Racecards | Today's Horse Racing Cards | Racing Post"
        Then the button "button#truste-consent-button" is displayed

    Scenario: Test if the Next Big race date is in the future
        Given the title is "Racecards | Today's Horse Racing Cards | Racing Post"
        When  I click on the link "Big Race Entries"
        Then  I expect that the date "div:nth-child(2) > div:nth-child(1) > div.RC-bigRaces__dateWide" is in the future
