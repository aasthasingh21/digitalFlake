const Category = require('../model/category');

// Get all  the tasks
const getAllCategory = async (req, res) => {
    // we use try and catch for error handling, if no error run try code and if any error it runs catch code
    try { 
        const category = await Category.find(); // .find is a mongodb function for getting the data
        res.json(category); // to show the data on the frontend
    } catch (error) {
        res.status(500).json(error.message);
    }
};

// create new task
const createNewCategory = async (req, res) => {
    const category = new Category({ // creating a new task by the data from frontend(req)
        id: req.body.id,
        name: req.body.name,
        description: req.body.description,
        status: req.body.status
    });

    try {
        const newCategory = await category.save(); // saving the data in the database
        res.json(newCategory); 
    } catch (error) {
        res.status(500).json(error.message);
    }
};

// update task 
const updateCategory = async (req, res) => {
    try {
        const category = await Category.findOne(req.params.id); // finding the task

        if (!category) {
            return res.status(404).json({ message: 'category not found' });
        }
      
        // if task found update desired data
        category.name = req.body.name || category.name;
        category.description = req.body.description || category.description;
        category.status = req.body.status || category.status;

    
        const updatedCategory = await category.save(); // saving the updated data/task
        res.json(updatedCategory);
    } catch (error) {
        res.status(500).json(error.message);
    }
};

// delete task
const deleteCategory = async (req, res) => {
    try {
        const category = await Category.findOne(req.params.id); // finding the task by id

        if (!category) {
            return res.status(404).json({ message: 'category not found' });
        }

        const a1 = await category.deleteOne(); // deleteing the task
        res.json(a1);
    } catch (error) {
        res.status(500).json(error.message);
    }
};


module.exports = {
    getAllCategory,
    createNewCategory,
    updateCategory,
    deleteCategory
};