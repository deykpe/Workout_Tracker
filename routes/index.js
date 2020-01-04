const router = require ('express').Router()

const db = require ('../models/workout1.js')

router.get('/api/alltransaction', function (request, response){
    db.find(({})).then(function(records){
        response.json(records)
    })
    .catch( function (error) {
        response.send(error)
    })
})

router.post('/api/alltransaction', function (request, response){

    db.create((request.body)).then(function(records){
        response.json(records)
    })
    .catch( function (error){
        response.send(error)
    })
})

module.exports = router