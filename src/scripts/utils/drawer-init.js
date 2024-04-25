const DrawerInitiator = {
    async init({
        button,
        drawer,
        mainContent,
        navLinks,
    }) {
        button.addEventListener('click', (event) => {
            this._toggleDrawer(event, drawer);
        });
        mainContent.addEventListener('click', (event) => {
            this._closeDrawer(event, drawer);
        });
        await navLinks.forEach((link) => {
            link.addEventListener('click', (event) => {
                this._closeDrawer(event, drawer);
            });
        });
    },
    _toggleDrawer(event, drawer) {
        event.stopPropagation();
        drawer.classList.toggle('open');
    },
    _closeDrawer(event, drawer) {
        event.stopPropagation();
        drawer.classList.remove('open');
    },
};

export default DrawerInitiator;
