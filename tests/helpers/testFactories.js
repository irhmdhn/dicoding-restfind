import FavoriteButtonInit from '../../src/scripts/utils/favorite-button-init';

const restaurantId = 'rqdv5juczeskfw1e867';
const createFavBtnPresenterWithRestaurant = async (restaurant) => {
    await FavoriteButtonInit.init({
        favBtnContainer: document.querySelector('#btnFavorite'),
        restaurant,
    });
};
// eslint-disable-next-line import/prefer-default-export
export { restaurantId, createFavBtnPresenterWithRestaurant };
