// open connnection to the mongo db
const dotenv = require('dotenv')
dotenv.config()
const mongodb = require('mongodb');
// takes care of connecting to the database
const connectionString = 'mongodb+srv://PetAdmin:PetAdmin4130@cluster0-9gl3z.mongodb.net/bob_wier_guitarshop?retryWrites=true&w=majority';

mongodb.connect(process.env.CONNECTIONSTRING, {useNewUrlParser: true, useUnifiedTopology: true}, function(err, client) {
    module.exports = client
    const app = require('./app')
    app.listen(process.env.PORT)
});