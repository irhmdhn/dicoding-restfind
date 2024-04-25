const loader = {
    show: () => {
        const create = document.createElement('div');
        create.setAttribute('id', 'loader');
        document.body.appendChild(create);
    },
    hidden: () => {
        const loading = document.getElementById('loader');
        if (loading) loading.remove();
    },
};

export default loader;
