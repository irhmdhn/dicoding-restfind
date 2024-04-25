import UrlParser from '../routes/url-parser';
import routes from '../routes/router';
import DrawerInitiator from '../utils/drawer-init';
import loader from './loader';
import NavbarInitiator from '../utils/navbar-init';

class App {
    constructor({
        skipBtn, navbar, navLinks,
        button, drawer, mainContent,
    }) {
        this._skipBtn = skipBtn;
        this._navbar = navbar;
        this._navLinks = navLinks;
        this._button = button;
        this._drawer = drawer;
        this._mainContent = mainContent;

        this._initialAppShell();
    }

    _initialAppShell() {
        DrawerInitiator.init({
            button: this._button,
            drawer: this._drawer,
            mainContent: this._mainContent,
            navLinks: this._navLinks,
        });
    }

    async renderPage() {
        const urlParser = UrlParser.parseActiveUrlWithCombiner();
        const page = routes[urlParser];

        loader.show();
        this._mainContent.innerHTML = await page.render();
        await page.afterRender();
        loader.hidden();

        NavbarInitiator.init({
            skipBtn: this._skipBtn,
            navbar: this._navbar,
            navLinks: this._navLinks,
            url: urlParser,
            content: document.querySelector('#sect-content'),
        });
    }
}

export default App;
