import 'regenerator-runtime';
import '../styles/main.scss';
import '../styles/responsive.scss';
import "@phosphor-icons/web/bold";
import "@phosphor-icons/web/fill";
import { restaurants } from '../public/data/DATA.json'


const mainWrapper = document.querySelector('#main-wrapper');
const navbar = document.querySelector("#navbar");
const navbarBtnToggle = document.querySelector('#navbar__btn')
const navbarNav = document.querySelector('#navbar__nav')
const restaurantsContainer = document.querySelector('#content__resto__cards')


// NAVBAR ON SCROLL
window.onscroll = function () { 
    if (document.documentElement.scrollTop >= 200 ) {
        navbar.classList.add("navbar-colored");
        navbar.classList.remove("navbar-transparent");
    } 
    else {
        navbar.classList.add("navbar-transparent");
        navbar.classList.remove("navbar-colored");
    }
}


// NAVIGATION DRAWER
const handleNav = (isButton) => {
    const classIcon = document.querySelector('.navbar__btn-icon').classList 
    if (isButton) {
        navbarNav.classList.toggle('open')
        classIcon.contains('ph-list') ?
            classIcon.replace('ph-list', 'ph-x')
            :
            classIcon.replace('ph-x', 'ph-list')
    }else{
        navbarNav.classList.remove('open')
        classIcon.replace('ph-x', 'ph-list')
    }    
}
navbarBtnToggle.addEventListener('click', () => { handleNav(true) })
mainWrapper.addEventListener('click', () => { handleNav(false) })


// RESTAURANT LIST 
restaurants.map(resto => {
    restaurantsContainer.innerHTML += `
    <div class="card">
        <div class="card__img">
            <span class="card__img-rating"><i class="ph-fill ph-star"></i>${resto.rating}</span>
            <img src=${resto.pictureId} alt=${resto.name} loading="lazy">
        </div>
        <div class="card__body">
            <a href="#" class="card__title">${resto.name}</a>
            <div class="card__badge">
                <span class="card__badge-city"><i class="ph-fill ph-map-pin"></i>${resto.city}</span>
            </div>
            <p class="card__desc">${resto.description}</p>
        </div>
    </div>
    `;
})