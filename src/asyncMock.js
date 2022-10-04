const products = [
    {
        id:'1',
        name: 'Pecho',
        price: 800,
        category: 'depilacion',
        img:'https://www.depilife.com.ar/public/img/shop/zonas/168.jpg',
        stock: 25,
        description: `Depilacion de pecho`,
    },
    {
        id:'2',
        name: 'Abdomen',
        price: 1000,
        category: 'depilacion',
        img:'https://www.depilife.com.ar/public/img/shop/zonas/107.jpg',
        stock: 25,
        description: `Depilacion de abdomen`,
    },
    {
        id:'3',
        name: 'Piernas',
        price: 1500,
        category: 'depilacion',
        img: 'https://www.depilife.com.ar/public/img/shop/zonas/135.jpg',
        stock: 25,
        description: `Depilacion de piernas`,
    }
]

export const getProducts = () => {
    return new Promise ((resolve)=>{
        setTimeout(()=>{
            resolve(products)
        }, 1000)
    })
}