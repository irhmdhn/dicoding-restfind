import RestaurantSource from '../data/restaurant-source';
// import API_ENDPOINT from '../global/api-endpoints';

const SendReview = (form) => {
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);
        await RestaurantSource.sendReview(data);
        location.reload();
    });
};

export default SendReview;
