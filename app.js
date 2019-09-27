const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
require('dotenv').config();

// const dashboard = require('./routes/dashboard.js');
const users = require('./routes/usersRoute.js');
const config = require('./config.js');

const MONGODB_URI = 'mongodb://localhost:27017/codemunit';
const PORT = process.env.PORT || 5000;

mongoose.connect(MONGODB_URI, { useCreateIndex: true,useNewUrlParser: true ,useUnifiedTopology: true });
mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB');
});
mongoose.connection.on('error', (error) => {
    console.log(error);
});

let app = express();

// Body Parser Middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'client/build')));

app.use((req, res, next) => {
     res.header("Access-Control-Allow-Origin", "*");
     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
     if (req.method === 'OPTIONS') {
         res.header("Access-Control-Allow-Methods", "PUT, POST, DELETE, GET");
         return res.status(200).json({});
     }
     next();
});

// app.use('/api/dashboard', dashboard);
app.use('/api/users', users);

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/client/public/index.html'));
});

app.listen(PORT, () => {
    console.log('Server started on port', PORT);
});