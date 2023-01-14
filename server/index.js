const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const CorsOptions = require("cors");

const houses = require("./routes/houses");

const app = express();
app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to the housse listing API");
});

app.use("/api/houses", houses);

require("dotenv").config();

const PORT = process.env.PORT || 3000;

mongoose
  .connect(
    `mongodb+srv://admin:admin@cluster0.0nzgdwi.mongodb.net/house_app?retryWrites=true&w=majority`
  )
  .then((result) => {
    app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
  })
  .catch((err) => console.log(err));

// app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))

// const homes = [
//         {
//             id: 1,
//             type: 'Apartment',
//             description: 'Well furnished apartment'
//         },
//         {
//             id: 2,
//             type: 'Flat',
//             description: 'Well furnished flat at flatville'
//         }
//     ]

// app.get('/', ( req, res ) => {
//     res.send('Welcome to the House Listing API')
// })

// // get all the homes
// app.get('/api/listing', (req, res) => {

//     res.send(homes)
// })

// // get homes by id
// app.get('/api/listing/:id', (req,res) => {
//     const home = homes.find(home => home.id === parseInt(req.params.id))

//     if(!home){
//         res.status(404).send('The home with gien ID is not found')
//     }
//      res.send(home)
// })

// // create a listing
// app.post('/api/listing', (req,res) => {

//     if(!req.body.type || !req.body.description){
//         return res.status(400).send('Title & Description is required')
//     }

//     const home = {
//             id: homes.length + 1,
//             type: req.body.type,
//             description: req.body.description
//     }

//     homes.push(home);
//     res.send(home)
// })

// // update a listing
// app.put('/api/listing/:id', (req,res) => {

//     const home = homes.find(home => home.id === parseInt(req.params.id));

//     if(!home){
//         res.status(404).send('The home with gien ID is not found')
//     }

//     home.type = req.body.type;
//     home.description = req.body.description;

//     res.send(home);

// })

// // delete a listing
// app.delete('/api/listing/:id', (req,res) =>{
//     const home = homes.find(home => home.id === parseInt(req.params.id));

//     if(!home){
//         res.status(404).send('The home with given ID is not found')
//     }

//     const index = homes.indexOf();
//     homes.splice(index, 1);

//     res.send(home);

// })

// app.use('/api/houses', houses);
