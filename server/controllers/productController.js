const Product = require('../model/product');

// Get all  the tasks
const getAllProduct = async (req, res) => {
    // we use try and catch for error handling, if no error run try code and if any error it runs catch code
    try { 
        const product = await Product.find(); // .find is a mongodb function for getting the data
        res.json(product); // to show the data on the frontend
    } catch (error) {
        res.status(500).json(error.message);
    }
};

// create new task
const createNewProduct = async (req, res) => {
    const product = new Product({ // creating a new task by the data from frontend(req)
        id: req.body.id,
        category: req.body.category,
        name: req.body.name,
        packsize: req.body.packsize,
        mrp: req.body.mrp,
        status: req.body.status
    });

    try {
        const newProduct = await product.save(); // saving the data in the database
        res.json(newProduct); 
    } catch (error) {
        res.status(500).json(error.message);
    }
};

// update task 
const updateProduct = async (req, res) => {
    try {
        const product = await Product.findOne(req.params.id); // finding the task

        if (!product) {
            return res.status(404).json({ message: 'product not found' });
        }
      
        // if task found update desired data
        product.category = req.body.category || product.category;
        product.name = req.body.name || product.name;
        product.packsize = req.body.packsize || product.packsize;
        product.mrp = req.body.mrp || product.mrp;
        product.status = req.body.status || product.status;

    
        const updatedProduct = await product.save(); // saving the updated data/task
        res.json(updatedProduct);
    } catch (error) {
        res.status(500).json(error.message);
    }
};

// delete task
const deleteProduct = async (req, res) => {
    try {
        const product = await Product.findOne(req.body.id); // finding the task by id

        if (!product) {
            return res.status(404).json({ message: 'product not found' });
        }
        const newproduct = product.deleteOne();
        res.json(newproduct);
    } catch (error) {
        res.status(500).json(error.message);
    }
};


module.exports = {
    getAllProduct,
    createNewProduct,
    updateProduct,
    deleteProduct
};