const express = require('express');
const database = require('./database/db');
const bodyParser = require('body-parser');
const cors = require('cors');
const expressSession = require('express-session'); // to save the user data in the server

const userRouter = require('./routes/user');
const categoryRouter = require('./routes/category');
const productRouter = require('./routes/product');
const passport = require('passport');

const { serializeUser, deserializeUser } = require('./model/user'); // for login/register

const app = express();

app.use(cors({
    origin: 'http://localhost:3000', // Allow requests from example.com only
    methods: ['GET', 'POST', 'PATCH', 'DELETE'],      // Allow only GET and POST requests
    allowedHeaders: ['Content-Type'], // Allow only Content-Type header
}));

// Authentication code
app.use(expressSession({ // will save users data on the server(session allow the data to be held/saved on the server and passport gets the data or can say handles the data)
    resave: false,
    saveUninitialized: false,
    secret: "happy me"
}));
app.use(passport.initialize()); // passport helps in making protected routes/url
app.use(passport.session()); // to hold/save passport data(user) with session
passport.serializeUser(serializeUser());
passport.deserializeUser(deserializeUser());


app.use(cors()); // to connect ui and server
app.use(bodyParser.json()); // helps send data in json format


app.use('/', userRouter); // when / is hit it will trigger the user in routes 
app.use('/category', categoryRouter);
app.use('/product', productRouter);

// app.get('/', (req, res) => {
//     res.send('Welcome to the root endpoint!');
//   });

const PORT = process.env.PORT || 8000; 

database(); // database connection

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});