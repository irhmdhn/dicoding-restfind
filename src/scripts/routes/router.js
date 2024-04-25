import DetailRestaurant from '../views/pages/detail-restaurant';
import Favorite from '../views/pages/favorite';
import Home from '../views/pages/home';
import Restaurants from '../views/pages/restaurants';

const routes = {
    '/': Home,
    '/restaurants': Restaurants,
    '/restaurant/:id': DetailRestaurant,
    '/favorite': Favorite,
};

export default routes;
