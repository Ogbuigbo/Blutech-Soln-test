import React, { useContext, useEffect, useState } from 'react';
import { ApiContext } from '../contexts/ApiContext';

const ProductTable = () => {
    const { products, loading, error } = useContext(ApiContext);
    const [initialProducts, setInitialProducts] = useState([]);

    useEffect(() => {
        const fetchInitialProducts = async () => {
            try {
                const response = await fetch('http://3.88.1.181:8000/products/public/catalog?supplier=FragranceNet&first=0&last=50');
                if (!response.ok) {
                    throw new Error('Failed to fetch initial products');
                }
                const data = await response.json();
                setInitialProducts(data.slice(0, 10));
            } catch (err) {
                console.error('Error fetching initial products:', err);
            }
        };

        fetchInitialProducts();
    }, []);

    if (loading && products.length === 0) return <p>Loading...</p>;
    if (error && products.length === 0) return <p>Error fetching data: {error.message}</p>;

    const productsToDisplay = products.length > 0 ? products.slice(0, 10) : initialProducts;

    if (!productsToDisplay.length) return <p>No products found.</p>;

    return (
        <div className="overflow-x-auto mt-8">
            <h1 className='text-[18px] py-6 pl-8'>Department List</h1>
            <table className="min-w-full bg-white">
                <thead className="bg-[#F0F4FE]">
                    <tr >
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            <input type="checkbox" />
                            <span className='px-3'> S/N</span>
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Image</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">SKU</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Brand</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Cost Price</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quantity</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Size</th>
                    </tr>
                </thead>

                <tbody className='bg-[#f3f4f6]'>
                    <tr>
                        <td colSpan="10" className="py-2"></td>
                    </tr>
                </tbody>
            </table>
            <div className="drop-shadow-2xl rounded-full">
                <table className="min-w-full shadow-2xl ">
                    <tbody className="divide-y divide-gray-200 shadow-2xl  ">
                        {productsToDisplay.map((product, index) => (
                            <tr key={product.SKU} className="bg-white">
                                <td className="px-6 py-4 whitespace-nowrap gap-4">
                                    <input type="checkbox" />
                                    <span className='px-6'>{index + 1}.</span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    {product['Image Links'] && product['Image Links'].length > 0 && (
                                        <img src={product['Image Links'][0]} alt={product.Title} className="h-10 w-10 rounded-lg" />
                                    )}
                                    {product.Image_1 && (
                                        <img src={product.Image_1} alt={product.Title} className="h-10 w-10 rounded-lg" />
                                    )}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">{product.SKU}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{product.Name}</td>
                                <td className="px-6 py-4 w-[200px]">{product.Title.split(' ').slice(0, 10).join(' ')}...</td>
                                <td className="px-6 py-4 w-[400px]">{product.Description.split(' ').slice(0, 20).join(' ')}...</td>
                                <td className="px-6 py-4 whitespace-nowrap">{product.Brand}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{product['Cost Price']}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{product.Quantity}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{product.size}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ProductTable;
