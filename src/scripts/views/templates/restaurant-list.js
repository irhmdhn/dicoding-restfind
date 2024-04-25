const RestaurantList = {
    templateRestaurantList: (title, val = false) => `
        <div id="content" class="content">
            <div class="content__resto">
                <h2 class="content__title">${title}</h2>
                <div id="content__resto__cards" class="content__resto__cards">
                </div>
                ${val ? '<a href="#/restaurants" class="see-more btn btn-outline-primary">See All Restaurant</a>' : ''}
            </div>
        </div>
    `,
};

export default RestaurantList;
