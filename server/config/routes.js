author = require('../controllers/authors.js')

module.exports = function(app){
    //RETRIEVE ALL
    app.get('/authors', author.index);

    //RETRIEVE ONE BY ID
    app.get('/author/:id', author.show_one);

    //CREATE
    app.post('/author', author.create);

    //UPDATE BY ID
    app.put('/author/:id/', author.update);

    //DELETE BY ID
    app.delete('/author/:id/', author.destroy);
};

