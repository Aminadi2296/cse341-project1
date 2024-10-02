const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        title: 'Contacts Api',
        description: 'Contacts Api'
    },
    host: 'localhost:3000',
    schemes: ['http']
};

const outputFile = "./swagger.json";
const endpointsFile = ['./routes/index.js'];

// this will generate swaggerAutogen.json
swaggerAutogen(outputFile, endpointsFile, doc)