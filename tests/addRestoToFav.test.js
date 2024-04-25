/* eslint-disable no-undef */
import FavoriteRestaurant from '../src/scripts/data/favorite-restaurant';
import ButtonFavorite from '../src/scripts/views/components/button-favorite';
import * as TestFactories from './helpers/testFactories';

describe('Add to favorite', () => {
    const addToFavoriteButtonContainer = () => {
        document.body.innerHTML = '<div class="fav-btn-container"></div>';
    };
    const addToFavoriteButton = (isAdded) => {
        document.querySelector('.fav-btn-container').innerHTML = ButtonFavorite(isAdded);
    };

    beforeEach(() => {
        addToFavoriteButtonContainer();
    });

    it('should show the favorite button when the resto has not been add to favorite list before', async () => {
        addToFavoriteButton(false);
        await TestFactories.createFavBtnPresenterWithRestaurant({
            id: TestFactories.restaurantId,
        });
        expect(document.querySelector('[aria-label="Add to favorite"]')).toBeTruthy();
    });

    it('should not show the favorite button when the resto has not been add to favorite list', async () => {
        addToFavoriteButton(true);
        await TestFactories.createFavBtnPresenterWithRestaurant({
            id: TestFactories.restaurantId,
        });
        expect(document.querySelector('[aria-label="Remove from favorite"]')).toBeTruthy();
    });

    it('should be able to add to favorite', async () => {
        addToFavoriteButton(false);
        await TestFactories.createFavBtnPresenterWithRestaurant({ id: TestFactories.restaurantId });
        document.querySelector('#btnFavorite').dispatchEvent(new Event('click'));

        const restaurant = await FavoriteRestaurant.getRestaurant(TestFactories.restaurantId);
        expect(restaurant).toEqual({
            id: TestFactories.restaurantId,
        });
        await FavoriteRestaurant.deleteRestaurant(TestFactories.restaurantId);
    });

    it('should not add a restaurant again when its already added', async () => {
        addToFavoriteButton(true);
        await TestFactories.createFavBtnPresenterWithRestaurant({ id: TestFactories.restaurantId });

        await FavoriteRestaurant.putRestaurant({ id: TestFactories.restaurantId });
        document.querySelector('#btnFavorite').dispatchEvent(new Event('click'));
        expect(await FavoriteRestaurant.getAllRestaurants()).toEqual([{
            id: TestFactories.restaurantId,
        }]);
        await FavoriteRestaurant.deleteRestaurant(TestFactories.restaurantId);
    });

    it('should not add a restaurant when it has no id', async () => {
        addToFavoriteButton(false);
        await TestFactories.createFavBtnPresenterWithRestaurant({});
        document.querySelector('#btnFavorite').dispatchEvent(new Event('click'));
        expect(await FavoriteRestaurant.getAllRestaurants()).toEqual([]);
    });
});
