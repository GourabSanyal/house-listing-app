const express = require('express');

const { body, validationResult } = require('express-validator');


const House = require('../models/House');

const router = express.Router();

// pass validation in req data using express-validation lib
const validate = [
    body('title')
        .isLength({ min: 3, max: 50 })
        .withMessage('Tilte should be betwwen 3 to 50 characters'),
    body('description')
        .isLength({ min: 10, max: 200 })
        .withMessage('Description should be betwwen 3 to 50 characters'),
    body('address')
        .isLength({ min: 10, max: 100 })
        .withMessage('Tilte should be betwwen 3 to 50 characters'),
    body('price')
        .isNumeric()
        .withMessage('Tilte should be betwwen 3 to 50 characters'),
 ]

// Defining routes /api/houses
 router.post('/', validate , ( req, res ) => {

    const errors = validationResult(req);

    if(!errors.isEmpty()){
        return res.status(422).send({ errors: errors.array()})
    }
    
    const house = new House({
        title: req.body.title,
        address: req.body.address,
        homeType: req.body.homeType,
        description: req.bodydescription,
        price: req.body.price,
        image: req.body.image,
        yearBuilt: req.body.yearBuilt
    })
    house.save()
        .then( result => {
            res.send({
                message: "House data created successfully",
                data: result
            })

        } )
        .catch(err => console.log(err))

 })

 // /api/houses
 router.get('/', ( req, res ) => {
     House.find()
     .then(houses => {
         res.send(houses)
        })
        .catch(err => console.log(err))
    })
    
// /api/houses/:id
router.get('/:id', ( req, res ) =>{
    const houseId = req.params.id;
    
    House.findById(houseId)
    .then(house => {
        res.send(house)
    })
    .catch(err => console.group(err))
})
    
// /api/houses/:id
router.put('/:id', validate, ( req, res ) =>{
    const houseId = req.params.id;

    const errors = validationResult(req);

    if(!errors.isEmpty()){
        return res.status(422).send({ errors: errors.array()})
    }

    House.findById(houseId)
        .then(house=> {
            house.title = req.body.title;
            house.description = req.body.description;
            house.address = req.body.address;
            house.homeType = req.body.homeType;
            house.price = req.body.price;
            house.image = req.body.image;
            house.yearBuilt = req.body.yearBuilt;

            return house.save()
        })
        .then(result => {
            res.send(result);
        })
        .catch(err => console.log(err))
}) 

// /api/houses/:id
router.delete('/:id', validate, ( req, res) =>{
    const houseId = req.body.id;

    House.findByIdAndRemove(houseId)
    .then(result =>{
        res.send(result)
    })
    .catch(err => console.log(err))
})


module.exports = router;