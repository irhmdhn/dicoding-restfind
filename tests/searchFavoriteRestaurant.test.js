/* eslint-disable no-undef */
const { default: FavoriteRestaurantSearchPresenter } = require('../src/scripts/views/pages/fav-resto/favorite-restaurant-search-presenter');

describe('Searching restaurants', () => {
    beforeEach(() => {
        document.body.innerHTML = `
          <div id="restaurant-search-container">
            <input id="query" type="text">
            <div class="restaurant-result-container">
              <ul class="restaurants">
              </ul>
            </div>
          </div>
        `;
    });

    it('should be able to capture the query typed by the user', () => {
        const presenter = new FavoriteRestaurantSearchPresenter();
        const queryElement = document.querySelector('#query');
        queryElement.value = 'resto a';
        queryElement.dispatchEvent(new Event('change'));
        expect(presenter.userQuery).toEqual('resto a');
    });
});
