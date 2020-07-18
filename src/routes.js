const express = require("express");

const AttractionsController = require('./controllers/AttractionsController');

const routes = express.Router();

routes.get("/", (request, response) => {
    return response.json({ message: "Server up" });
});

/*====Attractions ROUTES==== */
routes.get('/attractions', AttractionsController.get_all);
routes.get('/attractions/:category', AttractionsController.selectByCategory);
routes.post('/attractions/insert_new', AttractionsController.create);
routes.delete('/attractions/delete/:id', AttractionsController.deleteById);

module.exports = routes;