const express = require('express');
const swaggerUi = require ('swagger-ui-express');
const swaggerJsDoc = require ('swagger-jsdoc');
const collection = require ('./models/Books');
const connectToDatabase = require('./Src/config');
const bodyParser = require('body-parser');


const app = express();

app.use(bodyParser.json());


const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Book API",
            description: "CRUD API for managing books",
            version: "1.0"
        },
        servers: [
            {
                url: "http://localhost:4000/"
            }
        ]
    },
    apis: ["./routes/*.js"]
};

const swaggerBooks = swaggerJsDoc(options);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerBooks));

app.use('/api', require('./routes/Swagger.js'));


const PORT = 4000

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});