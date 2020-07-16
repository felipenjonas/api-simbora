const express = require('express');
const morgan = require('morgan');
const route = require('./src/routes');
const bodyParser = require('body-parser');
const port = process.env.PORT || 8080;

const app = express();


app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(express.json());
app.use(route);

app.listen(port, () => {
    console.log(`Server Started at port: ${port}` )
}) 



