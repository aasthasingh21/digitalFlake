const user = require('../model/user');
const passport = require('passport');
const localStrategy = require("passport-local");

passport.use(new localStrategy(user.authenticate())); // authentication

// register user
const registerUser = async (req, res) => {
    
    const userData = new user({ // creating new user
        username: req.body.username, 
        email: req.body.email,
        password: req.body.password,
    });

    try {
        await user.register(userData, req.body.password) // register creates the account with userdata and password, it returns a promise 
        passport.authenticate("local") (req, res, function() {
            res.send("new user register")
        });
        await userData.save();
    } catch (error) {
        res.status(500).json(error.message);
    }
    
};

// login user
const loginUser = async(req, res) => {
    try {
       await passport.authenticate("local", { // passport.authenticate : this means login in on the basis of password and username
            successRedirect: "/",
            failureRedirect: "/login"
        });
        res.send("user logged in")
    } catch (error) {
        res.status(500).json(error.message);
    }

};

// logout user
const logoutUser = (req, res, next) => {
    try {
        req.logout(function(err) {
            if (err) {
                throw err; // Throw the error if logout fails
            }
            res.redirect('/login');
        });
    } catch (error) {
        next(error); // push to middleware using next
    }

};

module.exports = {
    registerUser,
    loginUser,
    logoutUser,

};