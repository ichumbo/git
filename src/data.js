let products = [
    {
        category: 'All',
        display: false
    },
    {
        name: 'LipTint Boca Rosa',
        category: 'LipTint',
        image: '../img/liptint_boca-rosa.jpg',
        price: `R$10,00`,
        display: false
    },
    {
        name: 'LipTint Maçã Do Amor',
        category: 'LipTint',
        image: '../img/liptint_maca-amor.jpg',
        price: `R$10,00`,
        display: false
    },    
    {
        name: 'Rímel-name',
        image: '../img/rimel_the-colossal.jpg',
        category: 'Rímel',
        price: 'R$20,00',
        display: false
    },
    {
        name: 'Sombra-name',
        image: '../img/sombra_colourful.jpg',
        category: 'Sombra',
        price: 'R$45,00',
        display: false
    },
    {
        name: 'Sombra Sombreamento',
        image: '../img/sombra_colourful.jpg',
        category: 'Sombra',
        price: 'R$45,00',
        display: false
    },
    {
        name: 'Blush-name',
        image: '../img/blush_pink.png',
        category: 'Blush',
        price: 'R$31,00',
        display: false
    },
    {
        name: 'Lapis-name',
        image: '../img/lapis-olho_payot.png',
        category: 'Lápis de Olho',
        price: 'R$6,00',
        display: false
    }
];

export function getProducts() {
    // console.log(products);
    return products;
};