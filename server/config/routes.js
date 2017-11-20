var controller = require('../controller/controller.js');
module.exports = function(app){
    app.post('/login',controller.login)
    app.post("/register",controller.register)
    app.post('/addbike',controller.addbike)
    app.get('/mybikes',controller.mybikes)
    app.post('/updatebike/:id',controller.update)
    app.get('/deletebike/:id',controller.delete)
    app.get('/allbikes',controller.allbikes)
}