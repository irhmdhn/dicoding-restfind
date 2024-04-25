import RestaurantSource from '../../data/restaurant-source';
import UrlParser from '../../routes/url-parser';
import FavoriteButtonInit from '../../utils/favorite-button-init';
import SendReview from '../../utils/send-review';
import '../components/detail-restaurant';
import RestaurantDetail from '../templates/restaurant-detail';
import SectContent from '../templates/sect-content';

const DetailRestaurant = {
    async render() {
        return SectContent(RestaurantDetail.templateRestaurantDetail);
    },
    async afterRender() {
        const restaurantContainer = document.querySelector('#content');
        const { id } = UrlParser.parseActiveUrlWithoutCombiner();
        const { restaurant } = await RestaurantSource.detailRestaurant(id);
        const detailRestaurantElement = document.querySelector('detail-restaurant');
        detailRestaurantElement.resto = restaurant;
        restaurantContainer.appendChild(detailRestaurantElement);

        FavoriteButtonInit.init({
            favBtnContainer: document.querySelector('.fav-btn-container'),
            restaurant: {
                id: restaurant.id,
                name: restaurant.name,
                description: restaurant.description,
                city: restaurant.city,
                rating: restaurant.rating,
                pictureId: restaurant.pictureId,
            },
        });

        const btnBack = document.querySelector('.btn-back');
        const btn = document.getElementById('btnReview');
        btnBack.addEventListener('click', () => { history.back(); });
        btn.addEventListener('click', () => {
            const panel = document.querySelector('.your__review');

            if (panel.style.display === 'block') {
                btn.classList.add('active');
                panel.style.display = 'none';
            } else {
                panel.style.display = 'block';
            }
        });
        const form = document.getElementById('your-review');
        SendReview(form);
    },
};

export default DetailRestaurant;
