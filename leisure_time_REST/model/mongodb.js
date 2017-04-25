var mongo = require('mongodb');
var assert = require('assert');

var Server = mongo.Server,
    Db = mongo.Db,
    BSON = mongo.BSONPure;

var server = new Server('localhost', 3311, { auto_reconnect: true });
db = new Db('leisureTimeDB', server);

db.open(function(err, db) {

    if (db) {
        db.authenticate('leisureTimeAdmin', 'karan123', function(err, result) {
            assert.equal(true, result);
            console.log("authentication :" + result);
            // db.close();
        });
    } else {
        console.log("Database server is offline.");
    }
    if (!err) {
        console.log("Connected to 'leisureTimeDB' database");
    } else {
        console.log("There was problem while connecting with the database.");
    }
});