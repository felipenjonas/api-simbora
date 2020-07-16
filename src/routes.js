const express = require('express');
const app = express();
const route = express.Router();

const attractions_controller = require('./controllers/attractions-controller');

app.use((req, res, next) => {
    const erro = new Error('Não encontrado');
    erro.status = 404;
    next(erro);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    return res.send({erro: {mensagem: error.message}})
});

/*====Attractions ROUTES==== */
route.get('/attractions', attractions_controller.get_all);
route.get('/attractions/by_category', attractions_controller.selectByCategory);
route.post('/attractions/insert_new', attractions_controller.create);







module.exports = route;