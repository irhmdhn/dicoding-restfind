import RestaurantSource from '../../data/restaurant-source';
import HomeTemplate from '../templates/home';
import '../components/resto-card';
import RestaurantList from '../templates/restaurant-list';
import SectContent from '../templates/sect-content';

const Home = {
    async render() {
        return `
            <section id="hero" class="hero">
                ${HomeTemplate.templateHero}
            </section>
            ${SectContent(HomeTemplate.templateServices)}
        `;
    },

    async afterRender() {
        const sectContent = document.querySelector('#sect-content');
        sectContent.innerHTML += RestaurantList.templateRestaurantList('Find Restaurant', true);

        const dataRestaurants = await RestaurantSource.getRestaurants();
        const restaurantContainer = document.querySelector('#content__resto__cards');
        dataRestaurants.sort(() => Math.random() - 0.5).slice(0, 8).forEach((restaurant) => {
            const restoItemElement = document.createElement('resto-card');
            restoItemElement.classList.add('card');
            restoItemElement.resto = restaurant;
            restaurantContainer.appendChild(restoItemElement);
        });
    },
};

export default Home;
