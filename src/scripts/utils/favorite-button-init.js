import Swal from 'sweetalert2';
import FavoriteRestaurant from '../data/favorite-restaurant';
import ButtonFavorite from '../views/components/button-favorite';

const FavoriteButtonInit = {
    async init({ favBtnContainer, restaurant }) {
        this._favBtnContainer = favBtnContainer;
        this._restaurant = restaurant;
        await this._renderButton();
    },

    async _renderButton() {
        const { id } = this._restaurant;

        if (await this._isRestoExist(id)) {
            this._renderLiked();
        } else {
            this._renderLike();
        }
    },

    async _isRestoExist(id) {
        const restaurant = await FavoriteRestaurant.getRestaurant(id);
        return !!restaurant;
    },

    _renderLike() {
        this._favBtnContainer.innerHTML = ButtonFavorite(false);
        const favBtn = document.querySelector('#btnFavorite');
        favBtn.addEventListener('click', async () => {
            await FavoriteRestaurant.putRestaurant(this._restaurant);
            this._renderButton();
            Swal.fire({
                title: 'Added to favorite',
                text: 'Restaurant succesfuly added to favorite',
                icon: 'success',
                buttonsStyling: false,
                customClass: {
                    confirmButton: 'btn btn-primary',
                },
            });
        });
    },

    _renderLiked() {
        this._favBtnContainer.innerHTML = ButtonFavorite(true);

        const favBtn = document.querySelector('#btnFavorite');
        favBtn.addEventListener('click', async () => {
            await FavoriteRestaurant.deleteRestaurant(this._restaurant.id);
            this._renderButton();
            Swal.fire({
                title: 'Removed from favorite',
                text: 'Restaurant removed from favorite',
                icon: 'success',
                buttonsStyling: false,
                customClass: {
                    confirmButton: 'btn btn-primary',
                },
            });
        });
    },
};

export default FavoriteButtonInit;
