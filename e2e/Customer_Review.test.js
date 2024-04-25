/* eslint-disable no-undef */
Feature('Customer Review');

Before(({ I }) => {
    I.amOnPage('/#/restaurants');
});

Scenario('add user review for a restaurant', ({ I }) => {
    // choose first restaurant
    I.seeElement('resto-card a');
    I.waitForElement('resto-card a', 20);
    I.click(locate('resto-card a').first());
    // click add to favorite button
    I.seeElement('#btnReview');
    I.click('#btnReview');
    // input form
    I.fillField('Your name', 'E2E');
    I.fillField('Your review', 'Testing Review');
    I.click('button[type=submit]');
    // confirm alert popup
    I.seeElement('//div[@role="dialog"]');
    I.click('button.swal2-confirm');
});
