import FavoriteRestaurant from '../../data/favorite-restaurant';
import RestaurantList from '../templates/restaurant-list';
import SectContent from '../templates/sect-content';

const Favorite = {
    async render() {
        return SectContent(RestaurantList.templateRestaurantList('Your Favorite Restaurant'));
    },
    async afterRender() {
        const restaurants = await FavoriteRestaurant.getAllRestaurants();
        const restaurantContainer = document.querySelector('#content__resto__cards');
        if (restaurants.length > 0) {
            restaurants.forEach((restaurant) => {
                const restoItemElement = document.createElement('resto-card');
                restoItemElement.classList.add('card');
                restoItemElement.resto = restaurant;
                restaurantContainer.appendChild(restoItemElement);
            });
        } else {
            restaurantContainer.innerHTML = `
                <div class="alert__empty">
                    <h5>You don't have any favorite restaurant</h5>
                    <a href="#/restaurants" class="btn btn-primary">Add yours</a>
                </div>
            `;
        }
    },
};

export default Favorite;
