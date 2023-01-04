const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.use(express.json());

const authRoute = require('./route/auth');  

app.get( '/', (req, res) => {
    res.send('Welcome to the auth system')
})

app.use( '/api/users', authRoute);

require('dotenv').config();

const PORT = process.env.PORT || 3000;

mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@home-list-auth.gkw3i5z.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`
)
    .then(() => {
        app.listen( PORT, () => console.log(`Server is running on ${PORT}`));
    })
    .catch( err => console.log( err ));

mongoose.set('autoIndex', false);
mongoose.set('strictQuery', true);
mongoose.set('strictQuery', 
true);