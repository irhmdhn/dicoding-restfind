class RestoCard extends HTMLElement {
    set resto(resto) {
        this._resto = resto;
        this.render();
    }

    render() {
        this.innerHTML = `
            <div class="card__img">
                <img class="lazyload" src="https://restaurant-api.dicoding.dev/images/small/${this._resto.pictureId}" alt="${this._resto.name}">
            </div>
            <div class="card__body">
                <h5 class="card__title">${this._resto.name}</h5>
                <div class="card__rating-city">
                    <span>
                        <i class="ph-fill ph-star"></i>${this._resto.rating} 
                    </span>
                    <i class="ph-fill ph-circle"></i>
                    <span>
                         ${this._resto.city}
                    </span>
                </div>
                <p class="card__desc">${this._resto.description}</p>
                <a href="#/restaurant/${this._resto.id}" class="btn btn-outline-primary">Visit more <i class="ph-bold ph-arrow-right"></i></a>
            </div>
        `;
    }
}

customElements.define('resto-card', RestoCard);
