const express = require('express');
const router = express.Router();

const Datastore = require('nedb');
const db = new Datastore({ filename: 'database', autoload: true })

//implement live search 
router.get('/getname', (req, res) => {
     var query = new RegExp(req.query.name);

     console.log(query);
     db.find({name: query}, function(err, result){
           res.json(result);
     });
});


router.post('/', (req, res) => {
    db.insert(req.body, function(err, data){
         res.json({status: 'ok', data:data});
    })
});

module.exports = router;