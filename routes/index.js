var express = require('express');
const router = require('express').Router();

const controller = require('../controllers/index');
// const {getData} =require ('/controller/index')

router.use('/',require( './swagger'));

router.get('/', (req, res)=> {
    // swagger.tags=['Hello World']
    res.send('/contacts to the path ;)')
    });

router.get('/contacts', controller.getData);

router.get('/contacts/:id', controller.getById);

router.post('/contacts', controller.createContact);

router.put('/contacts/:id', controller.updateContact);

router.delete('/contacts/:id', controller.deleteContact);



module.exports = router;