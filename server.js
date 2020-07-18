const express = require('express');
const cors = require("cors");
const morgan = require('morgan');
const route = require('./src/routes');

require("dotenv").config();

const port = process.env.PORT || 8080;

const app = express();

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(route);

app.disable("x-powered-by");

app.listen(port, () => {
    console.log(`Server Started at port: ${port}` )
}) 