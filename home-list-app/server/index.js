const express = require('express');
const mongoose = require('mongoose');

const houses = require('./routes/houses');

const app = express();

app.use(express.json());

app.get('/', ( req, res ) => {
    res.send('Welcome to the House Listing API')
})      

app.use('/api/houses', houses);

require('dotenv').config();

const PORT = process.env.PORT || 3000;



mongoose.connect('mongodb+srv://admin:admin@cluster0.oozdf.mongodb.net/house_app?retryWrites=true&w=majority')
    .then(result => {
            app.listen(PORT, ()=>
                console.log(`Server is running on PORT ${PORT}`))
    })
    .catch(err => console.log(err))


    // const homes = [
    //     {
    //         id: 1,
    //         type: 'Apartment',
    //         description: 'Well furnished apartment'
    //     },
    //     {
    //         id: 2,
    //         type: 'Flat',
    //         description: 'Well furnished flat at flatville'
    //     }
    // ]
    
    // app.get('/', (req, res)=>{
    //     res.send('Welcome to Express Js')
    // })
    
    // app.get('/api/listing', ( req, res ) => {
    //     res.send(homes)
    // })
    
    // app.get('/api/listing/:id', ( req, res )=>{
    //     const home = homes.find(home => home.id === parseInt(req.params.id))
    //     if (!home){
    //         res.status(404).send('The home with given ID is not there')
    //     }
    //     res.send(home);
    // })
    
    // app.post('/api/listing', ( req, res ) =>{
    
    //     if( !req.params.type || !req.params.description ){
    //         return res.send('Type and description both are required')
    //     }
        
    //     const home = { 
    //         id: homes.length + 1,
    //         type: req.body.type,
    //         description: req.body.description,
    //     }
    
    //     homes.push(home);
    //     res.send(home);
    // })
    
    // app.put('/api/listing/:id', ( req, res ) => {
    //     const home = homes.find(home => home.id === parseInt(req.params.id))
    
    //     if (!home){
    //         res.status(404).send('The home with given ID is not there')
    //     }
    
    //     home.type = req.body.type;
    //     home.description = req.body.description;
     
    //     res.send(home);
    // })
    
    // app.delete('/api/listings/:id' , ( req, res ) => {
    //     const home = homes.find(home => home.id === parseInt(req.params.id))
    
    //     if (!home){
    //         res.status(404).send('The home with given ID is not there')
    //     }
    
    //     const index = homes.indexOf(home);
    //     homes.splice(index, 1);
    //     res.send(home);
    // })
// })