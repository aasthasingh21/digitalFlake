import { IoIosArrowRoundBack } from "react-icons/io";
import useApi from "../hooks/useApi";
import { useState } from "react";
import API_URLS from "../services/api.urls";

const Product = () => {

  const saveProduct = useApi(API_URLS.createNewProduct); // will create new category 

  const [formData, setFormData] = useState({
    category: '',
    name: '',
    packsize: '',
    mrp: '',
    status: 'active'
  });

  const handleInputChange = (e) => { // to change the data for new value to be added in
    setFormData({
      ...formData, [e.target.name]: e.target.value
    });
  };

  const handleSave = async () => { // we save the data and go to next page
    await saveProduct.call(formData);
    setFormData({
      category: '',
      name: '',
      packsize: '',
      mrp: '',
      status: 'active'
    });

  };

  return (
    <div className="w-screen border rounded-lg shadow-purple-600 ml-4 my-2 overflow-hidden p-4">
      <div className="flex items-center mb-4">
        <p className="text-lg font-semibold flex items-center gap-2"><a href="/product/view"><IoIosArrowRoundBack/></a>Add Product</p>
      </div>
      <div className="grid grid-cols-3 gap-4 mb-4">
        <div>
          <p className="font-semibold">Category</p>
          <div className="flex items-center">
            <select className="border rounded p-2 w-full" name="category" value={formData.category} onChange={handleInputChange}>
              <option value="milk">Fruits</option>
              <option value="fruits">Milk</option>
              <option value="fruits">FastFood</option>
            </select>
          </div>
        </div>
        <div>
          <p className="font-semibold">Product Name</p>
          <input type="text" className="border rounded w-full p-2" name="name" value={formData.name} onChange={handleInputChange} />
        </div>
        <div>
          <p className="font-semibold">Pack size</p>
          <input type="text" className="border rounded w-full p-2" name="packsize" value={formData.packsize} onChange={handleInputChange}/>
        </div>
        <div>
          <p className="font-semibold">MRP</p>
          <input type="text" className="border rounded w-full p-2" name="mrp" value={formData.mrp} onChange={handleInputChange}/>
        </div>
        <div>
          <p className="font-semibold">Status</p>
          <div className="flex items-center">
            <select className="border rounded p-2 w-full" name="status" value={formData.status} onChange={handleInputChange}>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
          </div>
        </div>
      </div>
      <div className="flex justify-end space-x-4">
        <button className="bg-gray-300 text-gray-700 py-2 px-4 rounded hover:bg-grey-400 focus:outline-none">
          Cancel
        </button>
        <button className="bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700 focus:outline-none" onClick={handleSave}>
          Save
        </button>
      </div>
    </div>
    
  );
}

export default Product;
