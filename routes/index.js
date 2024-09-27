const router = require('express').Router();

const controller = require('../controllers/index');
// const {getData} =require ('/controller/index')

router.get('/', (req, res)=> {res.send('Try adding /contacts to the path ;)')});
router.get('/contacts', controller.getData);
router.get('/contacts/:id', controller.getById);


module.exports = router;