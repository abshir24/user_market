var controller = require('../controller/controller.js');
module.exports = function(app){
    app.get('/all',controller.allNotes)
    app.post("/create",controller.create)
}