import React, { useState, useEffect } from 'react';
import { TbBoxSeam } from "react-icons/tb";
import { FaSearch } from 'react-icons/fa';
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import useApi from "../hooks/useApi";
import API_URLS from "../services/api.urls";

const CategoryDetail = () => {
    const getAllCategories = useApi(API_URLS.getAllCategory);
    const deleteCategory = useApi(API_URLS.deleteCategory);
    const updateCategory = useApi(API_URLS.updateCategory);

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getAllCategories.call();
    },[]);

    useEffect(() => {
        if (getAllCategories.response) {
            setCategories(getAllCategories.response);
        }
    }, [getAllCategories.response]);

    const handleDelete = async (ObjectId) => {
        await deleteCategory.call(null, `category/${ObjectId}`);
        setCategories(categories.filter(category => category.id !== ObjectId));
    };

    const handleEdit = async (ObjectId, newData) => {
        await updateCategory.call(newData, `category/${ObjectId}`);
        setCategories(categories.map(category => 
            category.id === ObjectId ? { ...category, ...newData } : category
        ));
    };

  return (
    <div className='w-screen border rounded-lg shadow-purple-600 ml-4 my-2 overflow-hidden'>
        <div className="flex items-center justify-between bg-gray-200 p-4">
            <div className="flex items-center">
                <TbBoxSeam className="text-gray-600 mr-2 text-xl" />
                <p className="text-gray-800 text-lg font-bold mr-4">Category</p>
            </div>
            <div className='relative flex items-center'>
                <FaSearch className="absolute text-gray-400 ml-3 flex-1"/>
                <input type="text" placeholder="Search..." className="flex-1 py-2 px-5 border border-gray-300 rounded-md focus:outline-none focus:border-purple-500"/>
            </div>
            <a href='/category' className="bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 focus:outline-none focus:bg-purple-600">
                Add New
            </a>
        </div>

        <div className="container mx-auto my-4">
            <table className="w-full border-collapse border border-gray-300">
                <thead>
                    <tr>
                        <th className="border border-gray-300 px-4 py-2">ID</th>
                        <th className="border border-gray-300 px-4 py-2">Name</th>
                        <th className="border border-gray-300 px-4 py-2">Description</th>
                        <th className="border border-gray-300 px-4 py-2">Status</th>
                    </tr>
                </thead>
                <tbody>
                        {Array.isArray(categories) && categories.map((category) => (
                            <tr key={category.id}>
                                <td className="border border-gray-300 px-4 py-2">{category.id}</td>
                                <td className="border border-gray-300 px-4 py-2">{category.name}</td>
                                <td className="border border-gray-300 px-4 py-2">{category.description}</td>
                                <td className="border border-gray-300 px-4 py-2">{category.status}</td>
                                <td className="flex flex-row justify-between mx-2 my-2 text-lg">
                                    <FaEdit onClick={() => handleEdit(category.id)}></FaEdit>
                                    <MdDelete onClick={() => handleDelete(category.id)}></MdDelete>
                                </td>
                            </tr>
                        ))}
                </tbody>
            </table>

        </div>

    </div>
  )
}

export default CategoryDetail;
