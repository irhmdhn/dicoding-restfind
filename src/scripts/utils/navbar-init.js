const NavbarInitiator = {
    init({
        skipBtn,
        navbar,
        navLinks,
        url,
        content,
    }) {
        this._navbarOnscroll(url, navbar);
        this._navbarActive(url, navLinks);
        this._skipNavbar(skipBtn, content);
    },

    _skipNavbar(skipBtn, content) {
        skipBtn.addEventListener('click', () => {
            // eslint-disable-next-line no-param-reassign
            content.tabIndex = -1;
            content.focus();
        });
    },

    _navbarOnscroll(url, navbar) {
        const isHomePage = url === '/';
        let scroll = 0;
        let lastScrollTop = 0;

        if (isHomePage) {
            scroll = 100;
            navbar.classList.add('navbar-transparent');
        } else {
            navbar.classList.add('navbar-colored');
            navbar.classList.remove('navbar-transparent');
        }

        window.onscroll = () => {
            const { scrollY } = window;
            const isScrolled = document.documentElement.scrollTop >= scroll;
            const isMobileNavbarNavOpen = navbar.children[2].classList.contains('open');
            navbar.classList.toggle('navbar-colored', isScrolled);
            navbar.classList.toggle('navbar-transparent', !isScrolled && isHomePage);
            if (!isMobileNavbarNavOpen) {
                if (scrollY > lastScrollTop) {
                    navbar.classList.remove('visible');
                } else {
                    navbar.classList.add('visible');
                }
            }
            lastScrollTop = scrollY <= 0 ? 0 : scrollY;
        };
    },

    _navbarActive(url, navLinks) {
        const currentUrl = [
            '/',
            '/restaurants',
            '/favorite',
            '/about',
        ];
        currentUrl.forEach((x) => {
            if (url === x) {
                navLinks[currentUrl.indexOf(x)].classList.add('active');
            } else {
                navLinks[currentUrl.indexOf(x)].classList.remove('active');
            }
        });
    },
};

export default NavbarInitiator;
