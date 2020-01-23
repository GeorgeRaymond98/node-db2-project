const express = require('express')
const db = require('../data/dbconfig.js');
const router = express.Router();

router.get('/', (req, res ) => {
    db('cars')
    .then(cars => {
        res.json(cars)
    })
    .catch(err => {
        res.status(500).json({errorMessage: "Unable to do anything"})
    })
})

router.post('/', (req, res) => {
    db('cars').insert(req.body)
    .then(ids => {
        db('cars').where({id: ids[0]})
        .then(newCar => {
            res.json(newCar)
        })
    })
        .catch(err => {
            res.status(500).json({errorMessage: "More Erros"})
    })
})

router.put('/:id', (req, res) => {
    db('cars').where({ id:req.params.id})
    .update(req.body)
    .then(updateNum => {
        db('cars').where({ id:req.params.id})
        .then(updateCar => {
            res.json(updateCar)
        })
    })
    .catch(err => {
        res.status(500).json({errorMessage: "Could not update"})
    })
})

router.delete('/:id', (req, res) => {
    db('cars')
    .where({ id: req.params.id})
    .del()
    .then(car => {
        res.status(204).json({message: 'deleted'});
    })
    .catch(err => {
        res.status(500).json({errorMessage: "Deleting Error"})
    })
})

module.exports = router;