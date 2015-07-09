/**
 * Created by andrej on 04.07.15.
 */
var express    = require('express'),
    http       = require('http'),
    mongo      = require('mongodb'),
    bodyParser  = require('body-parser'),
    router      = express.Router(),
    db      = new mongo.Db('myApp', new mongo.Server('localhost', 27017, {auto_reconnect: true})),
    people  = db.collection('people');

router
    .use(bodyParser.json())
    .route('/contact')
    .get(function(req, res){
        people.find().toArray(function (err, docs) {
            if(err) throw err;
            res.json(docs);
        })
    })
    .post(function(req, res){
        var contact = req.body;
        contact.userId = req.user.id;
        people.insert({name: req.body.name, job: req.body.job}, function(err, doc){
            if(err) throw err;
            res.json(doc);
        });
    });

router
    .param('id', function (req, res, next) {
        req.dbQuery = { id: parseInt(req.params.id, 10) };
        next();
    })
    .route('/contact/:id')
    .get(function (req, res) {
        people.findOne({__id: new mongo.ObjectID(req.dbQuery)}, function (err, data) {
            res.json(data);
        });
    });
module.exports = router;