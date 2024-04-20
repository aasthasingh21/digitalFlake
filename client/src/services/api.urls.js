
const API_URLS = {
    
    register: {
        endpoint: 'register',
        METHOD: 'POST'
    },
    login: {
        endpoint: 'login',
        METHOD: 'POST'
    },
    logout: {
        endpoint: 'logout',
        METHOD: 'GET'
    },
    getAllCategory: {
        endpoint: 'category',
        METHOD: 'GET'
    },
    createNewCategory: {
        endpoint: 'category',
        METHOD: 'POST'
    },
    updateCategory: {
        endpoint: 'category/:id',
        METHOD: 'PATCH'
    },
    deleteCategory: {
        endpoint: 'category/:id',
        METHOD: 'DELETE'
    },
    getAllProduct: {
        endpoint: 'product',
        METHOD: 'GET'
    },
    createNewProduct: {
        endpoint: 'product',
        METHOD: 'POST'
    },
    updateProduct: {
        endpoint: 'product/:id',
        METHOD: 'PATCH'
    },
    deleteProduct: {
        endpoint: 'product/:id',
        METHOD: 'DELETE'
    },
}

export default API_URLS;