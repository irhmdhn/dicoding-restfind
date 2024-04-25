import RestaurantSource from '../../data/restaurant-source';
import RestaurantList from '../templates/restaurant-list';
import SectContent from '../templates/sect-content';

const Restaurants = {
    async render() {
        return SectContent(RestaurantList.templateRestaurantList('Find Restaurant'));
    },

    async afterRender() {
        const restaurantContainer = document.querySelector('#content__resto__cards');
        const dataRestaurants = await RestaurantSource.getRestaurants();
        dataRestaurants.forEach((restaurant) => {
            const restoItemElement = document.createElement('resto-card');
            restoItemElement.classList.add('card');
            restoItemElement.resto = restaurant;
            restaurantContainer.appendChild(restoItemElement);
        });
    },
};

export default Restaurants;
