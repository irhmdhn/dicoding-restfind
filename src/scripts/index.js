import 'regenerator-runtime';
import '../styles/main.scss';
import '../styles/responsive.scss';
// eslint-disable-next-line import/no-unresolved
import '@phosphor-icons/web/bold';
// eslint-disable-next-line import/no-unresolved
import '@phosphor-icons/web/fill';
import App from './views/app';
import swRegister from './utils/sw-register';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const app = new App({
    skipBtn: document.querySelector('#skip-navigation-btn'),
    navbar: document.querySelector('#navbar'),
    navLinks: document.querySelectorAll('.navbar__nav-link'),
    button: document.querySelector('#navbar__btn'),
    drawer: document.querySelector('#navbar__nav'),
    mainContent: document.querySelector('#main-wrapper'),
});

window.addEventListener('hashchange', () => {
    app.renderPage();
});

window.addEventListener('load', () => {
    app.renderPage();
    swRegister();
});
