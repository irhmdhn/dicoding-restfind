import CONFIG from '../../global/config';

const DetailTemplate = {
    detail: ({ restaurant }) => `
        <div class="detail__content">
            <img src=${CONFIG.BASE_LARGE_IMAGE_URL + restaurant.pictureId} alt=${restaurant.name}/>
            <h1 class="detail__title">${restaurant.name}</h1>
            <p class="detail__desc">${restaurant.description}</p>
        </div>
    `,
};

export default DetailTemplate;
