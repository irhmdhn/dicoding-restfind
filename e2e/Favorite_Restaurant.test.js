/* eslint-disable no-undef */
Feature('Favorite Restaurant');

Before(({ I }) => {
    I.amOnPage('/#/favorite');
});

Scenario('showing empty list of favorite restaurant', ({ I }) => {
    I.seeElement('.alert__empty');
    I.see("You don't have any favorite restaurant", 'h5');
});

Scenario('add one restaurant to favorite then remove it from favorite', ({ I }) => {
    // ADD TO FAV
    // check if favorite list is empty then go to restaurant page
    I.seeElement('.alert__empty');
    I.amOnPage('/#/restaurants');
    // choose first restaurant
    I.seeElement('resto-card a');
    I.waitForElement('resto-card a', 20);
    I.click(locate('resto-card a').first());
    // click add to favorite button
    I.seeElement('#btnFavorite');
    I.click('#btnFavorite');
    // confirm alert popup
    I.seeElement('//div[@role="dialog"]');
    I.click('button.swal2-confirm');
    // go to favorite page
    I.amOnPage('/#/favorite');
    I.seeElement('resto-card');

    // REMOVE FROM FAVORITE
    // choose the restaurant
    I.seeElement('resto-card a');
    I.click('resto-card a');
    // click remove from favorite button
    I.seeElement('#btnFavorite');
    I.click('#btnFavorite');
    // confirm alert popup
    I.seeElement('//div[@role="dialog"]');
    I.click('button.swal2-confirm');
    // go to favorite page
    I.amOnPage('/#/favorite');
    I.seeElement('.alert__empty');
});
