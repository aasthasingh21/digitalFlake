import React, { useState, useEffect } from 'react';
import { TbBoxSeam } from "react-icons/tb";
import { FaSearch } from 'react-icons/fa';
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import useApi from "../hooks/useApi";
import API_URLS from "../services/api.urls";


const ProductDetail = () => {
    const [products, setProducts] = useState(''); 

    const showProduct = useApi(API_URLS.getAllProduct);
    const editProduct = useApi(API_URLS.updateProduct);
    const deleteProduct = useApi(API_URLS.deleteProduct);

    // to show all the data
    useEffect(() => { // we call the backend to check the data
        showProduct.call();
    },[]);

    useEffect(() => { // if they have data they send the response(data to frontend)
        if (showProduct.response) {
            setProducts(showProduct.response);
        }
    }, [showProduct.response]);

    // edit the product
    const handleEdit = async (productId, newData) => {
        await editProduct.call(newData, `product/${productId}`);
        setProducts(products.map(product => 
            product.id === productId ? { ...product, ...newData } : product
        ));
    };

    const handleDelete = async (productId) => {
        await deleteProduct.call(null, `product/${productId}`);
        setProducts(products.filter(product => product.id !== productId));
    };

  return (
    <div className='w-screen border rounded-lg shadow-purple-600 ml-4 my-2 overflow-hidden'>
        <div className="flex items-center justify-between bg-gray-200 p-4">
            <div className="flex items-center">
                <TbBoxSeam className="text-gray-600 mr-2 text-xl" />
                <p className="text-gray-800 text-lg font-bold mr-4">Product</p>
            </div>
            <div className='relative flex items-center'>
                <FaSearch className="absolute text-gray-400 ml-3 flex-1"/>
                <input type="text" placeholder="Search..." className="flex-1 py-2 px-5 border border-gray-300 rounded-md focus:outline-none focus:border-purple-500"/>
            </div>
            <a href='/product' className="bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 focus:outline-none focus:bg-purple-600">
                Add New
            </a>
        </div>

        <div className="container mx-auto my-4">

            <table className="w-full border-collapse border border-gray-300">
                <thead>
                    <tr>
                        <th className="border border-gray-300 px-4 py-2">ID</th>
                        <th className="border border-gray-300 px-4 py-2">Category</th>
                        <th className="border border-gray-300 px-4 py-2">Name</th>
                        <th className="border border-gray-300 px-4 py-2">Pack Size</th>
                        <th className="border border-gray-300 px-4 py-2">MRP</th>
                        <th className="border border-gray-300 px-4 py-2">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {Array.isArray(products) && products.map((product) => (
                        <tr key={product.id}>
                            <td className="border border-gray-300 px-4 py-2">{product.id}</td>
                            <td className="border border-gray-300 px-4 py-2">{product.category}</td>
                            <td className="border border-gray-300 px-4 py-2">{product.name}</td>
                            <td className="border border-gray-300 px-4 py-2">{product.packsize}</td>
                            <td className="border border-gray-300 px-4 py-2">{product.mrp}</td>
                            <td className="border border-gray-300 px-4 py-2">{product.status}</td>
                            <td className="flex flex-row justify-between mx-2 my-2 text-lg">
                                <FaEdit onClick={() => handleEdit(product.id)}></FaEdit>
                                <MdDelete onClick={() => handleDelete(product.id)}></MdDelete>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

    </div>
  )
}

export default ProductDetail;
