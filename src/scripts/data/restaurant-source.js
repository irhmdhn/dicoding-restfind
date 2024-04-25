import Swal from 'sweetalert2';
import API_ENDPOINT from '../global/api-endpoints';

const RestaurantSource = {
    async getRestaurants() {
        const response = await fetch(API_ENDPOINT.RESTAURANTS);
        const results = await response.json();
        return results.restaurants;
    },

    async detailRestaurant(id) {
        const response = await fetch(API_ENDPOINT.DETAIL(id));
        return response.json();
    },

    async sendReview(data) {
        const response = await fetch(API_ENDPOINT.SEND_REVIEW, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        });
        const result = await response.json();
        console.log(result);
        if (result.message === 'success') {
            await Swal.fire({
                title: 'Review Posted',
                text: 'Your review successfuly posted',
                icon: 'success',
                buttonsStyling: false,
                customClass: {
                    confirmButton: 'btn btn-primary',
                },
            });
        } else {
            await Swal.fire({
                title: 'Failed to Post',
                text: 'Your review failed to post',
                icon: 'danger',
                buttonsStyling: false,
                customClass: {
                    confirmButton: 'btn btn-primary',
                },
            });
        }
    },
};

export default RestaurantSource;
