export const products = [
    {
        id: 1,
        name: 'Gibson Les Paul Standar',
        price: '1,000,000 CLP',
        despcription: 'Guitarra Gibson Les Paul Standard edición 1960. Esta Guitarra es un reedicion de los años 60 con ese caracteristico sonido que hizo grandes a bandas como Led Zeppelin, Aerosmith, Rush, Fleetwood Mac, entre otros. ',
        stock: 30,
        img: 'https://casamarilla.cl/image/cachewebp/data/imagenesweb/lps600b8nh1-650x650w.webp',
        category: 'Guitarras',
    },
    {
        id: 2,
        name: 'Fender Stratocaster',
        price: '899,990 CLP',
        despcription: 'La Fender Stratocaster 1959, es quizas una de las guitarras mas iconicas en el mundo de la música no solo por su diseño caracteristico, si no tambien por los usuarios que usaron este famosos modelos, entre los cuales se encuentran Jimmy Hnedrix, John Frusciante, Eric Clapton, entre otros.',
        stock: 35,
        img: 'https://images.musicstore.de/images/0640/fender-american-vintage-ii-1957-stratocaster-mn-2-color-sunburst_1_GIT0059198-000.jpg',
    },
    {
        id: 3,
        name: 'Ibanez Acustica',
        price: '320,300 CLP',
        despcription: 'Una guitarra acustica, con un sonido calido y dulce, su sonoridad es agradable al oido, perfecto para tocar en momentos de paz o con amigos, en esos eternos viajes de campamento. Una opción recomendada.',
        stock: 50,
        img: 'https://musicalfama.com/wp-content/uploads/2024/10/AAD140OPN-1.webp'
    },
    {
        id: 4,
        name: 'Gibson SG Doble Mastil ',
        price: '1,200,000 CLP',
        despcription: 'La Gibson SG Doble mastil en color cereza es una de las guitarras más distinguidas debido a la forma de doble mastil. Posee 12 Cuerdas en un mastil, mientras que en el otro es de 6 cuerdas. Usaba por el reconocido Jimmy Page en la legenderia "Stairway to Heaven"',
        stock: 15,
        img: 'https://www.malaga8.com/61037-large_default/gibson-eds1275-double-neck-cr-p-34105.jpg'
    },

    
];

export const getProducts = () => {
    return new Promise((res) => {
        setTimeout(() => {
            res(products);
        }, 700);
    });
};

export const getProductById = (id) => {
    return new Promise((res) => {
        const productoFiltrado = products.find((product) => product.id === parseInt(id));
        setTimeout(() => {
            res(productoFiltrado);
        }, 2000);
    });
};

export const getProductByCategory = (category) => {
    return new Promise((res) => {
        const productosFiltrados = products.filter((product) => product.category === category);
        setTimeout(() => {
            res(productosFiltrados);
        }, 2000);
    });
};