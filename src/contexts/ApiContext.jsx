
import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const ApiContext = createContext();

const ApiProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [supplier, setSupplier] = useState('');
    const [searchTerm, setSearchTerm] = useState('');

    const fetchProducts = async (supplier, searchTerm) => {
        setLoading(true);
        setError(null);

        let url = 'http://3.88.1.181:8000/products/public/catalog';

        const params = {
            supplier: supplier || 'FragranceNet',
            first: 0,
            last: 50,
            search: searchTerm || '',
        };

        try {
            const response = await axios.get(url, { params });
            setProducts(response.data.slice(0, 50)); // Assuming data structure matches your product list
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProducts(supplier, searchTerm);
    }, [supplier, searchTerm]);

    return (
        <ApiContext.Provider value={{ products, loading, error, setSupplier, setSearchTerm }}>
            {children}
        </ApiContext.Provider>
    );
};

export { ApiContext, ApiProvider };

