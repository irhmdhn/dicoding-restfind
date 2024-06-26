/* eslint-disable no-undef */
import FavoriteRestaurant from '../src/scripts/data/favorite-restaurant';
import itActsAsFavoriteRestaurantModel from './contracts/favRestoContract';

describe('Favorite Restaurant Idb Contract Test Implementation', () => {
    afterEach(async () => {
        (await FavoriteRestaurant.getAllRestaurants()).forEach(async (restaurant) => {
            await FavoriteRestaurant.deleteRestaurant(restaurant.id);
        });
    });
    itActsAsFavoriteRestaurantModel(FavoriteRestaurant);
});
