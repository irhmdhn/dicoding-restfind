/* eslint-disable no-undef */
import FavoriteRestaurant from '../src/scripts/data/favorite-restaurant';
import ButtonFavorite from '../src/scripts/views/components/button-favorite';
import * as TestFactories from './helpers/testFactories';

describe('Remove from favorite', () => {
    const restaurantId = 'rqdv5juczeskfw1e867';
    const addToFavoriteButtonContainer = () => {
        document.body.innerHTML = '<div class="fav-btn-container"></div>';
    };

    beforeEach(async () => {
        addToFavoriteButtonContainer();
        document.querySelector('.fav-btn-container').innerHTML = ButtonFavorite(true);
        await FavoriteRestaurant.putRestaurant({ id: restaurantId });
    });
    afterEach(async () => {
        await FavoriteRestaurant.deleteRestaurant(restaurantId);
    });

    it('should display unlike widget when the restaurant has been added to favorite', async () => {
        await TestFactories.createFavBtnPresenterWithRestaurant({ id: restaurantId });
        expect(document.querySelector('[aria-label="Remove from favorite"]')).toBeTruthy();
    });

    it('should not display like widget when the restaurant has been added to favorite', async () => {
        await TestFactories.createFavBtnPresenterWithRestaurant({ id: restaurantId });
        expect(document.querySelector('[aria-label="Add to favorite"]')).toBeFalsy();
    });

    it('should be able to remove liked movie from the list', async () => {
        await TestFactories.createFavBtnPresenterWithRestaurant({ id: restaurantId });
        document.querySelector('[aria-label="Remove from favorite"]').dispatchEvent(new Event('click'));
        expect(await FavoriteRestaurant.getAllRestaurants()).toEqual([]);
    });

    it('should not throw error when user click unlike widget if the restaurant is not in the favorite list', async () => {
        await TestFactories.createFavBtnPresenterWithRestaurant({ id: restaurantId });
        await FavoriteRestaurant.deleteRestaurant(restaurantId);
        document.querySelector('[aria-label="Remove from favorite"]').dispatchEvent(new Event('click'));
        expect(await FavoriteRestaurant.getAllRestaurants()).toEqual([]);
    });
});
