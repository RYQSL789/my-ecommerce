const products = [
    { 
        id: '1', 
        name: 'Libro de React', 
        price: 2500, 
        category: 'libros', 
        image: 'https://via.placeholder.com/300x400?text=Libro+React', 
        description: 'La guía definitiva para dominar componentes y hooks.' 
    },
    { 
        id: '2', 
        name: 'Teclado Mecánico', 
        price: 5000, 
        category: 'tecnologia', 
        image: 'https://via.placeholder.com/300x400?text=Teclado+Pro', 
        description: 'RGB switches red para máxima velocidad.' 
    },
    { 
        id: '3', 
        name: 'Monitor 4K', 
        price: 12000, 
        category: 'tecnologia', 
        image: 'https://via.placeholder.com/300x400?text=Monitor+4K', 
        description: 'Ultra HD para diseño profesional.' 
    }
];

export const getProducts = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(categoryId ? products.filter(p => p.category === categoryId) : products);
        }, 500);
    });
};

export const getProductById = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(p => p.id === id));
        }, 500);
    });
};