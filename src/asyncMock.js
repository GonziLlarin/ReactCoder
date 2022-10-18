const products = [
    {
        id:'1',
        name: 'Pecho',
        price: 800,
        category: 'producto',
        img:'https://www.depilife.com.ar/public/img/shop/zonas/168.jpg',
        stock: 25,
        description: `Depilacion de pecho`,
    },
    {
        id:'2',
        name: 'Abdomen',
        price: 1000,
        category: 'producto',
        img:'https://www.depilife.com.ar/public/img/shop/zonas/107.jpg',
        stock: 25,
        description: `Depilacion de abdomen`,
    },
    {
        id:'3',
        name: 'Media pierna',
        price: 1500,
        category: 'producto',
        img: 'https://www.depilife.com.ar//public/img/shop/zonas/129.jpg',
        stock: 25,
        description: `Depilacion de media piernas`,
    },
    {
        id:'4',
        name: 'Axilas',
        price: 900,
        category: 'producto',
        img: 'https://www.depilife.com.ar//public/img/shop/zonas/110.jpg',
        stock: 25,
        description: `Depilacion de axilas`,
    },
    {
        id:'5',
        name: 'Brazos',
        price: 1100,
        category: 'producto',
        img: 'https://www.depilife.com.ar//public/img/shop/zonas/162.jpg',
        stock: 25,
        description: `Depilacion de Brazos`,
    },
    {
        id:'6',
        name: 'Espalda Completa',
        price: 1600,
        category: 'producto',
        img: 'https://www.depilife.com.ar//public/img/shop/zonas/121.jpg',
        stock: 25,
        description: `Depilacion de Espalda Completa`,
    },
    {
        id:'7',
        name: 'Pecho + Abdomen',
        price: 1600,
        category: 'promo',
        img: 'https://www.depilife.com.ar//public/img/shop/zonas/127.jpg',
        stock: 25,
        description: `Depilacion de Pecho + Abdomen`,
    },
    {
        id:'8',
        name: 'Axila + Pecho + Brazos',
        price: 2500,
        category: 'promo',
        img: 'https://www.depilife.com.ar//public/img/shop/zonas/112.jpg',
        stock: 25,
        description: `Depilacion de Axila + Pecho + Brazos`,
    },
    {
        id:'9',
        name: 'Piernas +Pecho + Abodmen',
        price: 1500,
        category: 'promo',
        img: 'https://www.depilife.com.ar/public/img/shop/zonas/135.jpg',
        stock: 25,
        description: `Depilacion de piernas + pecho + abdomen`,
    }
]

// export const getProducts = () => {
//     return new Promise ((resolve)=>{
//         setTimeout(()=>{
//             resolve(products)
//         }, 500)
//     })
// }

// export const getProductsById = (id) => {
//     return new Promise (resolve=>{
//         setTimeout(()=>{
//             resolve(products.find(prod => {
//                 return prod.id === id
//             }))
//         }, 500)
//     })
// }

// export const getProductsByCategory = (categoryId) => {
//     return new Promise (resolve =>{
//         setTimeout(()=>{
//             resolve(products.filter(prod => prod.category === categoryId ))
//         }, 500)
//     })
// }
export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductById = (id) => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(products.find(prod => {
                return prod.id === id
            }))
        }, 500)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 500)
    })
}