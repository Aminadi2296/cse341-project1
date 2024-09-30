const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongodb = require('./data/database');
const app = express();


const port = process.env.PORT || 3000;

app.use(bodyParser.json());

// app.use(cors({
//     origin: '*',
//     methods: ['GET', 'POST', 'DELETE', 'UPDATE', 'PUT', 'PATCH'],
//     allowedHeaders: 'Origin, X-Requested-With, Content-Type, Accept, Z-Key'
// }));
app.use((req, res, next)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'Origin, X-requested-With, Content-Type, Accept, Z-Key'
    )
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    next();
});



app.use('/', require('./routes'));


mongodb.initDb((err)=>{
    if(err){
        console.log(err);
    }
    else{
        app.listen(port, ()=> {console.log(`Database is listening & node is running on port ${port}`)})
    }
});

