import CONFIG from '../../global/config';

class DetailRestaurant extends HTMLElement {
    set resto(restaurant) {
        this._resto = restaurant;
        this.render();
    }

    render() {
        this.innerHTML = `
            <div class="restaurant__content">
                <button class="btn-back" title="Back" aria-label="Back"><i class="ph-bold ph-arrow-left"></i></button>
                <div class="restaurant__content-title">
                    <div class="">
                    <h2 class="restaurant__name">${this._resto.name}</h2>
                    <p class="restaurant__address">${this._resto.address}, ${this._resto.city}</p>
                    </div>
                    <div id="fav-btn-container" class="fav-btn-container"></div>
                </div>
                <div class="restaurant__content-img">
                    <span class="restaurant__rating" title="Rating"><i class="ph-fill ph-star"></i> ${this._resto.rating.toFixed(1)}</span>
                    <img src=${CONFIG.BASE_MEDIUM_IMAGE_URL + this._resto.pictureId} alt="${this._resto.name}"/>
                </div>
                <div class="restaurant__content-card">
                    <h4>Restaurant's description</h4>
                    <h6 class="restaurant__categories">
                        ${this._resto.categories.length === 1 ? 'Category: ' : 'Categories: '}
                        ${this._resto.categories.map((ctgr) => `${ctgr.name}`).join(', ')}
                    </h6>
                    <p class="restaurant__desc">${this._resto.description}</p>
                </div>
            </div>


            <div class="restaurant__content">
                <div class="restaurant__content-card">
                    <h4>Menu</h4>
                    <div class="restaurant__menu">
                        <div class="menus">
                            <div class="menu__title">
                                <i class="ph-bold ph-fork-knife"></i>
                                <h5>Foods</h2>
                            </div>
                            <ul>
                                ${this._resto.menus.foods.map((food) => `<li>${food.name}</li>`).join('')}
                            </ul>
                        </div>
                        <div class="menus">
                            <div class="menu__title">
                                <i class="ph-bold ph-coffee"></i>
                                <h5>Drinks</h2>
                            </div>
                            <ul>
                                ${this._resto.menus.drinks.map((drink) => `<li>${drink.name}</li>`).join('')}
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="restaurant__content-card">
                    <div class="card__header">
                        <h4>Customer reviews</h4>
                        <button id="btnReview" class="btn" aria-label="Add your review">Add yours <i class="ph-bold ph-caret-down"></i></button>
                    </div>
                    <div class="your__review">
                        <form id="your-review" class="form__review">
                            <h6>Add your review</h6>
                            <input type="text" name="id" value=${this._resto.id} hidden/>
                            <label for="review-name" class="sr-only">Your name</label>
                            <input id="review-name" type="text" placeholder="Your name" name="name" required/>
                            <label for="review-content" class="sr-only">Your review</label>
                            <input id="review-content" type="text" placeholder="Your review" name="review" required/>
                            <button type="submit" class="btn btn-primary"><i class="ph-bold ph-paper-plane-tilt"></i> Post</button>
                        </form>
                    </div>
                    <div class="cust__reviews">
                        ${this._resto.customerReviews.map((review) => `
                            <div class="cust__review">
                                <div class="cust__review-header">
                                    <img src="/images/icons/user.png" alt="${review.name}" />
                                    <div>
                                        <h6>${review.name}</h6>
                                        <span>${review.date}</span>
                                    </div>
                                </div>
                                <p>${review.review}</p>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
            
        `;
    }
}

customElements.define('detail-restaurant', DetailRestaurant);
